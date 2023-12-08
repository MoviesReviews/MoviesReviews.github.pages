import Banner from './banner/Banner'
import Movies from './movies/Movies'
import RelevantReviews from './relevantReviews/RelevantReviews'

export default function Home() {
    return (
        <>
            <Banner />

            <Movies />

            <RelevantReviews />

            {/* <ActiveUsers /> */}
        </>
    )
}