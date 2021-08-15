import EcommerceServicio from "./EcommerceServicio";
import PaginaWebServicio from "./PaginaWebServicio";
import UXUI from "./UXUI";

export default function CollapseEx() {
  return (
    <>
      <h2 className="servicios_titulo">Servicios</h2>
      <div className="servicios">
        <EcommerceServicio />
        <PaginaWebServicio />
        <UXUI />
      </div>
    </>
  );
}
