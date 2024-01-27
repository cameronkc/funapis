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
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #30ab49 
		"--color-primary-50": "224 242 228", // #e0f2e4
		"--color-primary-100": "214 238 219", // #d6eedb
		"--color-primary-200": "203 234 210", // #cbead2
		"--color-primary-300": "172 221 182", // #acddb6
		"--color-primary-400": "110 196 128", // #6ec480
		"--color-primary-500": "48 171 73", // #30ab49
		"--color-primary-600": "43 154 66", // #2b9a42
		"--color-primary-700": "36 128 55", // #248037
		"--color-primary-800": "29 103 44", // #1d672c
		"--color-primary-900": "24 84 36", // #185424
		// secondary | #6685f5 
		"--color-secondary-50": "232 237 254", // #e8edfe
		"--color-secondary-100": "224 231 253", // #e0e7fd
		"--color-secondary-200": "217 225 253", // #d9e1fd
		"--color-secondary-300": "194 206 251", // #c2cefb
		"--color-secondary-400": "148 170 248", // #94aaf8
		"--color-secondary-500": "102 133 245", // #6685f5
		"--color-secondary-600": "92 120 221", // #5c78dd
		"--color-secondary-700": "77 100 184", // #4d64b8
		"--color-secondary-800": "61 80 147", // #3d5093
		"--color-secondary-900": "50 65 120", // #324178
		// tertiary | #3de878 
		"--color-tertiary-50": "226 252 235", // #e2fceb
		"--color-tertiary-100": "216 250 228", // #d8fae4
		"--color-tertiary-200": "207 249 221", // #cff9dd
		"--color-tertiary-300": "177 246 201", // #b1f6c9
		"--color-tertiary-400": "119 239 161", // #77efa1
		"--color-tertiary-500": "61 232 120", // #3de878
		"--color-tertiary-600": "55 209 108", // #37d16c
		"--color-tertiary-700": "46 174 90", // #2eae5a
		"--color-tertiary-800": "37 139 72", // #258b48
		"--color-tertiary-900": "30 114 59", // #1e723b
		// success | #bd90c6 
		"--color-success-50": "245 238 246", // #f5eef6
		"--color-success-100": "242 233 244", // #f2e9f4
		"--color-success-200": "239 227 241", // #efe3f1
		"--color-success-300": "229 211 232", // #e5d3e8
		"--color-success-400": "209 177 215", // #d1b1d7
		"--color-success-500": "189 144 198", // #bd90c6
		"--color-success-600": "170 130 178", // #aa82b2
		"--color-success-700": "142 108 149", // #8e6c95
		"--color-success-800": "113 86 119", // #715677
		"--color-success-900": "93 71 97", // #5d4761
		// warning | #32baa7 
		"--color-warning-50": "224 245 242", // #e0f5f2
		"--color-warning-100": "214 241 237", // #d6f1ed
		"--color-warning-200": "204 238 233", // #cceee9
		"--color-warning-300": "173 227 220", // #ade3dc
		"--color-warning-400": "112 207 193", // #70cfc1
		"--color-warning-500": "50 186 167", // #32baa7
		"--color-warning-600": "45 167 150", // #2da796
		"--color-warning-700": "38 140 125", // #268c7d
		"--color-warning-800": "30 112 100", // #1e7064
		"--color-warning-900": "25 91 82", // #195b52
		// error | #adc41d 
		"--color-error-50": "243 246 221", // #f3f6dd
		"--color-error-100": "239 243 210", // #eff3d2
		"--color-error-200": "235 240 199", // #ebf0c7
		"--color-error-300": "222 231 165", // #dee7a5
		"--color-error-400": "198 214 97", // #c6d661
		"--color-error-500": "173 196 29", // #adc41d
		"--color-error-600": "156 176 26", // #9cb01a
		"--color-error-700": "130 147 22", // #829316
		"--color-error-800": "104 118 17", // #687611
		"--color-error-900": "85 96 14", // #55600e
		// surface | #182938 
		"--color-surface-50": "220 223 225", // #dcdfe1
		"--color-surface-100": "209 212 215", // #d1d4d7
		"--color-surface-200": "197 202 205", // #c5cacd
		"--color-surface-300": "163 169 175", // #a3a9af
		"--color-surface-400": "93 105 116", // #5d6974
		"--color-surface-500": "24 41 56", // #182938
		"--color-surface-600": "22 37 50", // #162532
		"--color-surface-700": "18 31 42", // #121f2a
		"--color-surface-800": "14 25 34", // #0e1922
		"--color-surface-900": "12 20 27", // #0c141b
		
	}
}