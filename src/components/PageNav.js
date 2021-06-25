import React from "react";
import { Link } from "gatsby";

const PageNav = () => {
  return (
    <div className="page-nav">
      <div className="page-nav-wrap" data-aos="fade-left">
        <Link to="/services#sfs">SFS</Link>
        <Link to="/services#suspended-ceilings">Suspended Ceilings</Link>
        <Link to="/services#partitioning-drylining">
          Partitioning Drylining
        </Link>
        <Link to="/services#demountable-partitioning">
          Demountable Partitioning
        </Link>
        <Link to="/services#carpentry-bespoke-joinery-cladding">
          Carpentry Bespoke Joinery Cladding
        </Link>
        <Link to="/services#finishing-plastering-tape-and-joint">
          Finishing Plastering Tape and Joint
        </Link>
        <Link to="/services#acoustic-solutions">Acoustic Solutions</Link>
        <Link to="/services#hygienic-wall-lining">Hygienic Wall Lining</Link>
      </div>
    </div>
  );
};

export default PageNav;
