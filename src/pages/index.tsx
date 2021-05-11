
export default function Home(props) {
  console.log(props.episodes)
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');

  return {
    props: {
      episodes: await response.json(),
    },
    revalidate: 60 * 60 * 8,
  }
}
