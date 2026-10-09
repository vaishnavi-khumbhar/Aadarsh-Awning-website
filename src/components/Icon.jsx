import {
  Home, Building2, Factory, Settings, CalendarCheck, Wrench, ShieldCheck, Handshake, LayoutGrid,
} from "lucide-react";

const map = { Home, Building2, Factory, Settings, CalendarCheck, Wrench, ShieldCheck, Handshake, LayoutGrid };

export default function Icon({ name, ...props }) {
  const C = map[name] || Settings;
  return <C aria-hidden="true" {...props} />;
}
