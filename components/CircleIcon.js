import Link from 'next/link'

export default function CircleIcon() {
  return (
    <Link href="/">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="circle"
        style={{ cursor: 'pointer' }}
      >
        <path
          d="M14 25.6667C20.4433 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55668 20.4433 2.33333 14 2.33333C7.55669 2.33333 2.33334 7.55668 2.33334 14C2.33334 20.4433 7.55669 25.6667 14 25.6667Z"
          stroke="#FAAD00"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 23.3333C19.1546 23.3333 23.3333 19.1547 23.3333 14C23.3333 8.84534 19.1546 4.66667 14 4.66667C8.84533 4.66667 4.66666 8.84534 4.66666 14C4.66666 19.1547 8.84533 23.3333 14 23.3333Z"
          stroke="#FAAD00"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
          stroke="#FAAD00"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
}
