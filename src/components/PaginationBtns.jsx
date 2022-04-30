import PageBtn from "./PageBtn";

export default function PaginationBtns({ page, setPage }) {
  return (
    <section>
      <PageBtn text={"First page"} action={() => setPage(0)} />
      <PageBtn text={"Next page"} action={() => setPage(page + 10)} />
      <PageBtn text={"Prev page"} action={() => setPage(page - 10)} />
      <PageBtn text={"Last page"} action={() => setPage(44095)} />
    </section>
  );
}
