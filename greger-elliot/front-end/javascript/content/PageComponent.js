import React from 'react';

/**
 * @author      Janne Klouman <janne@klouman.com>
 * @package     GregerElliotWebsite
 * @subpackage  Page
 */
class PageComponent extends React.Component {

    /**
     * PageComponent constructor.
     *
     * @param props
     * @param context
     */
    constructor(props, context) {
        super(props, context);
    };

    /**
     * Render PageComponent.
     *
     * @return {XML}
     */
    render() {

        let classes = [
            'content-component',
            'content-component--page'
        ];

        return (
            <article className={classes.join(' ')}>
                <h1>{this.props.page.title}</h1>
                <p dangerouslySetInnerHTML={{__html: this.props.page.content}}></p>
            </article>
        );
    }

}

// Export PageComponent.
export default PageComponent;
