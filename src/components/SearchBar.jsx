import React from "react"
import '../styles/search.scss'

export const SearchBar = () => {
    return (
        <>
        <div class="nci-header-nav__secondary">
			<form class="nci-header-search" method="get" action="/search" role="search">
				<label class="usa-sr-only" for="nci-header-search__field">
					Search
				</label>

				<input class="usa-input" id="nci-header-search__field" type="search" name="swKeyword"  data-autosuggest-collection="cgov"/>
				<button class="usa-button nci-header-search__search-button" type="submit" aria-label="Search">
				    <span class="nci-header-search__label" aria-hidden="true">Search</span>
				</button>
			</form>
		</div>
        </>
    )
}