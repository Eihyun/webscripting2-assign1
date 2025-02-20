import React from 'react';
import IonIcon from '@reacticons/ionicons';

const Album = ({ record, favorites, toggleFavorite }) => {
    return (

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">

          <div key={record.id} className="group relative">
          <img
              src={record.artworkUrl}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />

          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                  <span aria-hidden="true" className="inset-0" />
                  {record.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{record.artist}</p>
            </div>
            <div className="ml-6">
              <p className="text-sm font-medium text-gray-900">{record.price}</p>
              <button className="text-red-600 " onClick={() => toggleFavorite(record.id)}>
                {favorites.includes(record.id) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline" />}
              </button>
            </div>
          </div>

        </div>

      </div>
    )
}

export default Album;