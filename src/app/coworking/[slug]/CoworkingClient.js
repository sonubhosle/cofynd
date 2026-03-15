"use client";

import React from 'react';
import CityResults from '@/components/CityResults';
import PropertyDetailsWrapper from '@/components/PropertyDetails/PropertyDetailsWrapper';

const CoworkingClient = ({ params, isCityPage }) => {
  return (
    <>
      {isCityPage ? (
        <CityResults params={params} type="Coworking" />
      ) : (
        <PropertyDetailsWrapper slug={params.slug} />
      )}
    </>
  );
};

export default CoworkingClient;
