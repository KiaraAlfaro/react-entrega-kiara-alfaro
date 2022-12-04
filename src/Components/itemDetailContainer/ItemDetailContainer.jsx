import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [arrayDeProductos, setArrayDeProductos] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', detalleId);
    getDoc(queryDoc)
        .then(res => setArrayDeProductos({id: res.id,...res.data()}));
  }, [ detalleId]);

  return (
    <>
      <div>
        <ItemDetail product={arrayDeProductos} />
      </div>
    </>
  );
}
 