"use client";
import { useParams } from "next/navigation";

const PropertyPage = () => {
  const { id } = useParams();
  return (
    <>
      <div>you are in property {id} page</div>
    </>
  );
};

export default PropertyPage;
