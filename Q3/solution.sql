SELECT owner.owner_id, owner.owner_name, COUNT(DISTINCT category.category_id) AS "different_category_count"
FROM owner
	LEFT JOIN article on owner.owner_id = article.owner_id
    LEFT JOIN category_article_mapping ON article.article_id = category_article_mapping.article_id
    LEFT JOIN category ON category_article_mapping.category_id = category.category_id
GROUP BY owner.owner_id
ORDER BY different_category_count ASC