/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

import {Platform} from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
	light: {
		text: '#11181C',
		background: '#fff',
		tint: tintColorLight,
		icon: '#687076',
		tabIconDefault: '#687076',
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: '#ECEDEE',
		background: '#151718',
		tint: tintColorDark,
		icon: '#9BA1A6',
		tabIconDefault: '#9BA1A6',
		tabIconSelected: tintColorDark,
	},
};

export const Fonts = Platform.select({
	ios: {
		/** iOS `UIFontDescriptorSystemDesignDefault` */
		sans: 'system-ui',
		/** iOS `UIFontDescriptorSystemDesignSerif` */
		serif: 'ui-serif',
		/** iOS `UIFontDescriptorSystemDesignRounded` */
		rounded: 'ui-rounded',
		/** iOS `UIFontDescriptorSystemDesignMonospaced` */
		mono: 'ui-monospace',
	},
	default: {
		sans: 'normal',
		serif: 'serif',
		rounded: 'normal',
		mono: 'monospace',
	},
	web: {
		sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
		serif: "Georgia, 'Times New Roman', serif",
		rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
		mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
	},
});


export const Spacing = {
	"none": 0,
	"xs": 4,
	"sm": 8,
	"md": 12,
	"lg": 16,
	"xl": 24,
	"2xl": 32
}

export const Radius = {
	"sm": 6,
	"md": 12,
	"lg": 20,
	"pill": 9999
}

export const FontStyle = {
	"family": {
		"regular": "System",
		"bold": "System"
	},
	"size": {
		"xs": 12,
		"sm": 14,
		"md": 16,
		"lg": 20,
		"xl": 24
	},
	"lineHeight": {
		"xs": 16,
		"sm": 20,
		"md": 24,
		"lg": 28,
		"xl": 32
	}
}

export const Shadow = {
	"sm": "0px 1px 2px rgba(0,0,0,0.05)",
	"md": "0px 2px 4px rgba(0,0,0,0.1)",
	"lg": "0px 4px 8px rgba(0,0,0,0.15)"
}
