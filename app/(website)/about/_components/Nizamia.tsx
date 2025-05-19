import React from 'react';

const Nizamia = () => {
  return (
    <div className='container-box bg-greenColor'>
      <div className='text-center'>
        <h2 className='lg:text-4xl text-2xl font-semibold text-white '>
          Nizamia Charitable Trust : Serving Humanity Since 1983
        </h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3  mt-10  gap-10'>
        <div className='bg-white p-5  text-blueColor text-lg  rounded-lg shadow-xl'>
          For over four decades, Nizamia Charitable Trust has been a beacon of
          hope for the underprivileged. Established in 1983, our mission has
          been simple yet profound—to extend a helping hand to those who need it
          most.
        </div>
        <div className='bg-white p-5  text-blueColor text-lg rounded-lg shadow-xl '>
          Poverty, hunger, illness, and lack of opportunity continue to plague
          countless lives. The struggle for survival is real, and for many, even
          basic necessities remain out of reach. In these moments of despair, we
          stand as a source of comfort, dignity, and hope.
        </div>
        <div className='bg-white p-5  text-blueColor text-lg rounded-lg shadow-xl'>
          Every meal we serve, every blanket we provide, and every life we heal
          is a testament to our unwavering commitment. Together, we can ensure
          that no one is left behind.
        </div>
      </div>
    </div>
  );
};

export default Nizamia;
