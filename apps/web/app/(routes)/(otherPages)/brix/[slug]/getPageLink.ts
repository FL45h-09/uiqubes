'use client';

interface ComponentPageProps {
  params: {
    slug: string;
  };
}


export const getPageLink = ({ params }: ComponentPageProps) => {
  return params;
}
