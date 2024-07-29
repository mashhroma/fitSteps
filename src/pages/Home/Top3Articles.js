import { Link } from "react-router-dom";
import ArticlePreview from "../../components/ArticlePreview";

export default function Top3Articles({ articles }) {
	return (
		<div className="top green">
			<h3 className="top__title">Последние статьи</h3>
			<ul className="top__list">
				{articles.map((article, index) => {
					return (
						index < 3 && (
							<li key={article.id}>
								<ArticlePreview article={article} width={400} height={360} />
							</li>
						)
					);
				})}
			</ul>
			<div className="top__all">
				<Link to="/articles">Показать все</Link>
			</div>
		</div>
	);
}
