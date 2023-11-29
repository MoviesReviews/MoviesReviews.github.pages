import Banner from './banner/Banner'
import Movies from './movies/Movies'
import RelevantReviews from './relevantReviews/RelevantReviews'
import ActiveUsers from './activeUsers/ActiveUsers'

export default function Home() {
    return (
        <>
            <Banner />

            <Movies />

            <RelevantReviews />

            <ActiveUsers />
        </>
    )
}