import Link from "next/link";
import { ScanSearch } from "lucide-react";

export function Brand({ compact=false }: { compact?: boolean }) {
  return <Link href="/" className="brand" aria-label="Recovix home">
    <span className="brand-mark"><ScanSearch size={20}/></span>
    {!compact && <span>Recovix</span>}
  </Link>;
}
