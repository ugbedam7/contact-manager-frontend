export const ContactVaultLogo = () => {
  return (
    <svg
      width="90"
      height="95"
      viewBox="0 0 200 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {/* Shield Background */}
      <path
        d="M100 10L30 50V110C30 160 65 180 100 190C135 180 170 160 170 110V50L100 10Z"
        fill="#1E293B"
        stroke="#565b65"
        strokeWidth="12"
        strokeLinejoin="round"
      />

      {/* User Icon (Head) */}
      <circle cx="100" cy="70" r="20" fill="white" />

      {/* User Icon (Body) */}
      <path
        d="M80 110C80 95 95 90 100 90C105 90 120 95 120 110V130H80V110Z"
        fill="white"
      />

      {/* Text "contactVault" Below the Logo */}
      <text
        x="50%"
        y="90"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#grad1)"
        vectorEffect="non-scaling-size"
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '35px',
          fontWeight: '800'
        }}>
        contact
      </text>

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="cyan" stopOpacity="1" />
          <stop offset="100%" stopColor="blue" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SmallContactVaultLogo = () => {
  return (
    <svg
      width="90"
      height="50"
      viewBox="0 0 200 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {/* Shield Background */}
      <path
        d="M100 10L30 50V110C30 160 65 180 100 190C135 180 170 160 170 110V50L100 10Z"
        fill="#1E293B"
        stroke="#565b65"
        strokeWidth="12"
        strokeLinejoin="round"
      />

      {/* User Icon (Head) */}
      <circle cx="100" cy="70" r="20" fill="white" />

      {/* User Icon (Body) */}
      <path
        d="M80 110C80 95 95 90 100 90C105 90 120 95 120 110V130H80V110Z"
        fill="white"
      />

      {/* Text "contactVault" Below the Logo */}
      <text
        x="50%"
        y="90"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#grad1)"
        vectorEffect="non-scaling-size"
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '35px',
          fontWeight: '800'
        }}>
        contact
      </text>

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="cyan" stopOpacity="1" />
          <stop offset="100%" stopColor="blue" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SmallContactVaultLogo;
