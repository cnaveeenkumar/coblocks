/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import save from './save';
import transforms from './transforms';
import { hasFormattingCategory } from '../../utils/block-helpers';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'Gist', 'coblocks' ),
	/* translators: block description */
	description: __( 'Embed a GitHub Gist.', 'coblocks' ),
	category: hasFormattingCategory ? 'common' : 'embed',
	icon,
	keywords: [
		'coblocks',
		'github',
		/* translators: block keyword */
		__( 'code', 'coblocks' ),
	],
	supports: {
		html: false,
		align: [ 'wide' ],
	},
	attributes,
	transforms,
	edit,
	save,
	deprecated,
};

export { name, category, metadata, settings };
