'use client';

import React from 'react'
import { Link } from 'react-router-dom'

interface AnimatedButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: string
}

export function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  href,
}: AnimatedButtonProps) {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group'

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30',
    secondary: 'bg-secondary text-foreground hover:bg-secondary/80 hover:shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  }

  const element = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse -translate-x-full group-hover:translate-x-full transition-all duration-500" />
    </>
  )

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//')
    if (isInternal) {
      return (
        <Link
          to={href}
          className={`inline-block ${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        >
          {element}
        </Link>
      )
    }

    return (
      <a
        href={href}
        className={`inline-block ${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {element}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {element}
    </button>
  )
}
