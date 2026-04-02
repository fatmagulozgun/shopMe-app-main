import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <div className="w-full rounded-[32px] border border-stone-200 bg-white px-6 py-16 text-center shadow-sm">
                <div className="text-sm font-black uppercase tracking-[0.28em] text-stone-400">404</div>
                <h1 className="mt-3 text-4xl font-black text-stone-900 sm:text-5xl">Sayfa bulunamadi</h1>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                    Aradigin sayfa tasinmis, kaldirilmis olabilir ya da adres yanlis girilmis olabilir.
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-flex rounded-2xl bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-500"
                >
                    Ana sayfaya don
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
