import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';
import StatusView from '../common/StatusView';
import { formatCategory } from '../../utils/format';

const Products = ({category, sort, onResetFilters}) => {

  const dispatch = useDispatch();
  const {products, productsStatus, productsError} = useSelector(state => state.products);
  const categoryLabel = category ? formatCategory(category) : null;

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    if (!products.length) return;
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(()=> {
    if(category) {
      dispatch(getCategoryProducts(category))
      setItemOffset(0);
      return;
    }
    dispatch(getProducts());
    setItemOffset(0);
  },[dispatch, category])

  const sortedItems = [...currentItems].sort((a,b) => {
    if (sort === "inc") return a.price - b.price;
    if (sort === "dec") return b.price - a.price;
    return 0;
  });

  return (
    <div className='w-full'>
      {
        productsStatus === "LOADING" ? <Loading /> :
        productsStatus === "FAIL" ? (
        <StatusView
          title="Urunlere su an ulasilamiyor"
          description={productsError || "Bir hata olustu. Lutfen biraz sonra tekrar deneyin."}
          tone="danger"
          action={
            <button
              className='rounded-2xl bg-stone-900 px-5 py-3 text-sm font-bold text-white'
              onClick={() => category ? dispatch(getCategoryProducts(category)) : dispatch(getProducts())}
            >
              Tekrar dene
            </button>
          }
        />
        ) :
        <>
        <div className=''>
          
          {category && (
            <div className='flex flex-wrap items-center gap-3'>
              <div className='rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold capitalize text-amber-700'>
                Aktif kategori: {categoryLabel}
              </div>
              <button
                className='rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white'
                onClick={onResetFilters}
              >
                Filtreyi temizle
              </button>
            </div>
          )}
        </div>
        {products.length === 0 ? (
          <div className='rounded-[28px] border border-dashed border-stone-300 bg-white p-10 text-center text-stone-500 shadow-sm'>
            Bu filtre için gösterilecek ürün bulunamadı.
          </div>
        ) : (
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {
            sortedItems.map((product,i) => (
                <Product key={i} product={product}/>
            ))
          }
        </div>
        )}
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
        </>
      }
    </div>
  )
}

export default Products
