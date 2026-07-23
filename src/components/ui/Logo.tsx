import lockup from '../../assets/logos/cromax-lockup.svg';
import lockupWhite from '../../assets/logos/cromax-lockup-white.svg';
import symbol from '../../assets/logos/cromax-symbol.svg';
import symbolWhite from '../../assets/logos/cromax-symbol-white.svg';

type LogoKind = 'lockup' | 'symbol';
type LogoVariant = 'red' | 'white';

const sources: Record<LogoKind, Record<LogoVariant, string>> = {
  lockup: { red: lockup, white: lockupWhite },
  symbol: { red: symbol, white: symbolWhite },
};

interface LogoProps {
  kind?: LogoKind;
  variant?: LogoVariant;
  className?: string;
}

export function Logo({ kind = 'lockup', variant = 'red', className }: LogoProps) {
  return (
    <img
      src={sources[kind][variant]}
      alt="Cromax Soluções Diagnósticas"
      className={className}
      draggable={false}
    />
  );
}
