import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( props ) {
    const { attributes, setAttributes } = props;

	return (
		<RichText
            tagName="p"
            value={ attributes.content }
            onChange={ (content) => setAttributes( { content } ) }
            placeholder="Type content here..."
        />
	);
}
