import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #8a6684 
		"--color-primary-50": "237 232 237", // #ede8ed
		"--color-primary-100": "232 224 230", // #e8e0e6
		"--color-primary-200": "226 217 224", // #e2d9e0
		"--color-primary-300": "208 194 206", // #d0c2ce
		"--color-primary-400": "173 148 169", // #ad94a9
		"--color-primary-500": "138 102 132", // #8a6684
		"--color-primary-600": "124 92 119", // #7c5c77
		"--color-primary-700": "104 77 99", // #684d63
		"--color-primary-800": "83 61 79", // #533d4f
		"--color-primary-900": "68 50 65", // #443241
		// secondary | #6b6f67 
		"--color-secondary-50": "233 233 232", // #e9e9e8
		"--color-secondary-100": "225 226 225", // #e1e2e1
		"--color-secondary-200": "218 219 217", // #dadbd9
		"--color-secondary-300": "196 197 194", // #c4c5c2
		"--color-secondary-400": "151 154 149", // #979a95
		"--color-secondary-500": "107 111 103", // #6b6f67
		"--color-secondary-600": "96 100 93", // #60645d
		"--color-secondary-700": "80 83 77", // #50534d
		"--color-secondary-800": "64 67 62", // #40433e
		"--color-secondary-900": "52 54 50", // #343632
		// tertiary | #795eb9 
		"--color-tertiary-50": "235 231 245", // #ebe7f5
		"--color-tertiary-100": "228 223 241", // #e4dff1
		"--color-tertiary-200": "222 215 238", // #ded7ee
		"--color-tertiary-300": "201 191 227", // #c9bfe3
		"--color-tertiary-400": "161 142 206", // #a18ece
		"--color-tertiary-500": "121 94 185", // #795eb9
		"--color-tertiary-600": "109 85 167", // #6d55a7
		"--color-tertiary-700": "91 71 139", // #5b478b
		"--color-tertiary-800": "73 56 111", // #49386f
		"--color-tertiary-900": "59 46 91", // #3b2e5b
		// success | #69a1de 
		"--color-success-50": "233 241 250", // #e9f1fa
		"--color-success-100": "225 236 248", // #e1ecf8
		"--color-success-200": "218 232 247", // #dae8f7
		"--color-success-300": "195 217 242", // #c3d9f2
		"--color-success-400": "150 189 232", // #96bde8
		"--color-success-500": "105 161 222", // #69a1de
		"--color-success-600": "95 145 200", // #5f91c8
		"--color-success-700": "79 121 167", // #4f79a7
		"--color-success-800": "63 97 133", // #3f6185
		"--color-success-900": "51 79 109", // #334f6d
		// warning | #2957e6 
		"--color-warning-50": "223 230 251", // #dfe6fb
		"--color-warning-100": "212 221 250", // #d4ddfa
		"--color-warning-200": "202 213 249", // #cad5f9
		"--color-warning-300": "169 188 245", // #a9bcf5
		"--color-warning-400": "105 137 238", // #6989ee
		"--color-warning-500": "41 87 230", // #2957e6
		"--color-warning-600": "37 78 207", // #254ecf
		"--color-warning-700": "31 65 173", // #1f41ad
		"--color-warning-800": "25 52 138", // #19348a
		"--color-warning-900": "20 43 113", // #142b71
		// error | #878a73 
		"--color-error-50": "237 237 234", // #ededea
		"--color-error-100": "231 232 227", // #e7e8e3
		"--color-error-200": "225 226 220", // #e1e2dc
		"--color-error-300": "207 208 199", // #cfd0c7
		"--color-error-400": "171 173 157", // #abad9d
		"--color-error-500": "135 138 115", // #878a73
		"--color-error-600": "122 124 104", // #7a7c68
		"--color-error-700": "101 104 86", // #656856
		"--color-error-800": "81 83 69", // #515345
		"--color-error-900": "66 68 56", // #424438
		// surface | #414381 
		"--color-surface-50": "227 227 236", // #e3e3ec
		"--color-surface-100": "217 217 230", // #d9d9e6
		"--color-surface-200": "208 208 224", // #d0d0e0
		"--color-surface-300": "179 180 205", // #b3b4cd
		"--color-surface-400": "122 123 167", // #7a7ba7
		"--color-surface-500": "65 67 129", // #414381
		"--color-surface-600": "59 60 116", // #3b3c74
		"--color-surface-700": "49 50 97", // #313261
		"--color-surface-800": "39 40 77", // #27284d
		"--color-surface-900": "32 33 63", // #20213f
		
	}
}