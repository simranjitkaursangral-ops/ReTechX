import { useEffect, useState } from "react";
import { getEwasteNews } from "../../services/NewsServices";


function News() {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");


    // ================= FETCH NEWS =================

    const FetchNews = (keyword = "") => {

        setLoading(true);

        getEwasteNews(keyword)
            .then((res) => {

                console.log("GNews Response:", res.data);

                setNews(res.data.articles);

                setLoading(false);

            })
            .catch((err) => {

                console.log("GNews Error:", err);

                setLoading(false);

            });
    };


    // ================= FIRST LOAD =================

    useEffect(() => {

        FetchNews();

    }, []);


    // ================= SEARCH =================

    const HandleSearch = (e) => {

        e.preventDefault();

        FetchNews(search);

    };


    return (
        <section className="news-section">

            <div className="news-container">


                {/* ================= HEADING ================= */}

                <div className="news-heading">

                    <span className="news-tag">
                        RETECHX • NEWS
                    </span>

                    <h2>
                        Latest E-Waste
                        <br />
                        <strong>Technology News.</strong>
                    </h2>

                    <p>
                        Stay updated with the latest news about
                        electronic waste, recycling and sustainable technology.
                    </p>

                </div>


                {/* ================= SEARCH BAR ================= */}

                <form
                    className="news-search"
                    onSubmit={HandleSearch}
                >

                    <input
                        type="text"
                        placeholder="Search any news..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button type="submit">
                        🔍 Search
                    </button>

                </form>


                {/* ================= LOADING ================= */}

                {loading && (

                    <div className="news-loading">
                        Loading latest news...
                    </div>

                )}


                {/* ================= NEWS ================= */}

                {!loading && news.length > 0 && (

                    <div className="news-grid">

                        {news.map((article) => (

                            <div
                                className="news-card"
                                key={article.id}
                            >

                                <div className="news-image-wrapper">

                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="news-image"
                                    />

                                </div>


                                <div className="news-content">

                                    <span className="news-source">
                                        {article.source?.name}
                                    </span>


                                    <h3>
                                        {article.title}
                                    </h3>


                                    <p>
                                        {article.description}
                                    </p>


                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="news-read-more"
                                    >
                                        Read Full Article
                                        <span>→</span>
                                    </a>

                                </div>

                            </div>

                        ))}

                    </div>

                )}


                {/* ================= NO NEWS ================= */}

                {!loading && news.length === 0 && (

                    <div className="news-empty">

                        <h3>
                            No news found
                        </h3>

                        <p>
                            Try searching for another topic.
                        </p>

                    </div>

                )}

            </div>

        </section>
    );
}

export default News;