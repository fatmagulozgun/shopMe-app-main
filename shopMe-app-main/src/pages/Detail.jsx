import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice';
import DetailComp from '../components/detail/DetailComp';
import Loading from '../components/Loading';
import StatusView from '../components/common/StatusView';

const Detail = () => {

    const {id} = useParams();

    const dispatch = useDispatch();
    const {productDetail, productDetailStatus, productDetailError} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getDetailProduct(id));
    },[dispatch,id])

  return (
    <div className='mt-10 min-h-screen'>
        <div className='mb-5'>
            <Link to="/" className='rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white'>
                Ana sayfaya don
            </Link>
        </div>
        {
            productDetailStatus === "LOADING" ? <Loading /> :
            productDetailStatus === "FAIL" ? (
                <StatusView
                    title="Urun detayi yuklenemedi"
                    description={productDetailError || "Urun bilgileri su anda kullanilamiyor."}
                    tone="danger"
                    action={
                        <button
                            className='rounded-2xl bg-stone-900 px-5 py-3 text-sm font-bold text-white'
                            onClick={() => dispatch(getDetailProduct(id))}
                        >
                            Tekrar dene
                        </button>
                    }
                />
            ) : <DetailComp productDetail={productDetail} />
        }

    </div>
  )
}

export default Detail
