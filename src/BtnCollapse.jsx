function BtnCollapse() {
  return (
    <button
      className="btn btn-outline-primary float-end collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target=".multi-collapse"
      aria-expanded="false"
    >
      Contraer todo
      <i className="ps-2"></i>
      <i className="arrow"></i>
    </button>
  );
}

export default BtnCollapse;
