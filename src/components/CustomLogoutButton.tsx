'use client'
import React from 'react'
import { useAuth } from '@payloadcms/ui'

export const CustomLogoutButton: React.FC = () => {
  const { logOut } = useAuth()

  return (
    <button
      onClick={async (e) => {
        e.preventDefault()
        await logOut()
        window.location.href = '/admin/login'
      }}
      className="custom-logout-btn"
      style={{
        width: '100%',
        padding: '10px 14px',
        backgroundColor: '#e11d48',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '15px',
        marginBottom: '60px',
        transition: 'background-color 0.2s ease',
      }}
      type="button"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
      <span>Log Out</span>
    </button>
  )
}
