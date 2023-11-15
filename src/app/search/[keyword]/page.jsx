import Movies from '@/components/Movies';
import React from 'react';

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=760087592fe788bc5946bcc8767716e0&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  return (
    <div>
      {!data?.results ? (
        <div>Arama bulunamadı</div>
      ) : (
        <div className='flex items-center flex-wrap gap-3'>
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
