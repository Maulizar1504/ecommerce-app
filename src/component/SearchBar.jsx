export default function SearchBar({search,setSearch}){

  return(

    <input
      type="text"
      placeholder="Cari produk..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      style={{
        padding:"8px",
        width:"250px",
        marginBottom:"1rem"
      }}
    />

  );

}