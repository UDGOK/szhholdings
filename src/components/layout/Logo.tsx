import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/images/logo.svg"
        alt="Ares Logo"
        width={200}
        height={60}
        style={{ width: 'auto', height: '48px' }}
        className="object-contain"
        priority
      />
      <div className="hidden lg:block text-[11px] font-medium leading-tight text-white tracking-wide opacity-90">
        <div>COMMERCIAL REAL ESTATE</div>
        <div>CORPORATION</div>
      </div>
    </div>
  );
}