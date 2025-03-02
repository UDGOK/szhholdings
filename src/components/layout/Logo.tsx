export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          SZH
        </span>
        <div className="ml-2 h-8 w-[2px] bg-gradient-to-b from-blue-500/80 to-purple-500/80" />
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-semibold tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          HOLDINGS
        </div>
        <div className="text-[10px] tracking-widest text-gray-400">
          INVESTMENTS & TECHNOLOGY
        </div>
      </div>
    </div>
  );
}