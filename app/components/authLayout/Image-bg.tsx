import Image from 'next/image';
export  function Layout() {
    return (
      <Image
        src="../../../material/movie-bg.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    );
  }