import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from '../lib/utils';

import { useStateContext } from '../context/StateContext';


const Success = () => {
    const { setCartItems , setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
      runFireworks();
    }, [])
    

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2> Obrigado pela sua compra!</h2>
            <p className='email-msg'>Verifique seu email com os dados de sua compra! </p>
            <p className='description'> Qualquer questão ou esclarecimento, entre em contacto por: 
            <a className="email" href="mailto:geral@gmail.com">geral@gmail.com</a></p>

            <Link href="/">
                <button type="button" width="300px" className='btn'>
                    Continuar comprando!
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success;