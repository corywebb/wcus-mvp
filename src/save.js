import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

import { useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
    const { attributes } = props;

	return (
		<RichText.Content
            tagName="p"
            value={ attributes.content }
        />
	);
}
