'use client'

import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import { useEffect } from 'react'
import { hideLoading } from '../redux/slices/cartSlice'
import { usePathname } from 'next/navigation'

export default function App({ children }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])
  const { cartItems, loading } = useSelector((state) => state.cart)
  const pathname = usePathname()

  return (
    <span>
      <span
        className={`${
          loading
            ? ''
            : cartItems.length > 0 &&
              (pathname === '/' || pathname.indexOf('/product/') >= 0)
            ? 'mr-32'
            : ''
        }`}
      >
        <Header />
        <main>{children}</main>
      </span>
    </span>
  )
}