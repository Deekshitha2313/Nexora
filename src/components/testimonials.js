import React from 'react';

const Card = ({ initials, name, role, review, rating }) => {
  return (
    <div  className="border border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4">
      <div  className="flex items-center space-x-4">
        <div id='boxing' className="h-12 w-12 flex items-center justify-center bg-red-500 text-white text-lg font-semibold rounded-full">
          {initials}
        </div>
        <div >
          <div id='middle' className="text-gray-900 font-medium">{name}</div>
          <div  id='middle' className="text-gray-600 text-sm">{role}</div>
        </div>
      </div>
      <div id='rev' className="flex text-red-500 text-xl">{'★'.repeat(rating)}</div>
      <p  id='boxex'className="text-gray-700">{review}</p>
      <div  id='hehe' className="text-red-500 font-medium cursor-pointer hover:underline">
        Read more
      </div>
    </div>
  );
};

const reviews = [
  {
    initials: 'DJ',
    name: 'Donald Jackman',
    role: 'Content Creator',
    review:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    rating: 5,
  },
  {
    initials: 'SA',
    name: 'Sophie Adams',
    role: 'Graphic Designer',
    review:
      'A fantastic tool! It’s intuitive and really streamlines my workflow. Highly recommended for any creative professionals.',
    rating: 4,
  },
  {
    initials: 'MT',
    name: 'Michael Trent',
    role: 'Photographer',
    review:
      'Great features and excellent performance. Imagify helped me enhance my content with minimal effort.',
    rating: 5,
  },
  {
    initials: 'AL',
    name: 'Anita Lopez',
    role: 'Marketing Manager',
    review:
      'Imagify’s UI is smooth and makes content generation enjoyable. I use it in all my campaigns.',
    rating: 5,
  },
];

const ReviewGrid = () => {
  return (
    <div id='rev' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {reviews.map((r, i) => (
        <Card key={i} {...r} />
      ))}
    </div>
  );
};


export default function AppTest(){
    return(
        <div  >
      <h1 className="title">What Our Users Say</h1>
      <p className='subtitle'>know more about our reviews</p>
        <ReviewGrid />
    </div>
    )
}