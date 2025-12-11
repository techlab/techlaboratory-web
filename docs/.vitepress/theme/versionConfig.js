/**
 * Version Configuration for Documentation
 * 
 * This file centralizes all version-related configuration for the documentation site.
 * Add new plugins/projects here with their version information.
 */

export const versionConfig = {
    // jQuery SmartWizard plugin
    'jquery-smartwizard': {
        versions: ['v6', 'v5', 'v4', 'v2'],
        latest: 'v6',
        deprecated: ['v4', 'v2']
    },

    // jQuery SmartCart plugin
    'jquery-smartcart': {
        versions: ['v3', 'v2'],
        latest: 'v3',
        deprecated: ['v2']
    },

    // jQuery SmartTab plugin
    'jquery-smarttab': {
        versions: ['v4', 'v3', 'v2'],
        latest: 'v4',
        deprecated: ['v3', 'v2']
    },

    // CopifyJS plugin
    'copify': {
        versions: ['v0'],
        latest: 'v2',
        deprecated: []
    }
}

/**
 * Get version information for a specific plugin
 * @param {string} pluginName - The plugin identifier
 * @returns {object|null} Version config or null if not found
 */
export function getVersionInfo(pluginName) {
    return versionConfig[pluginName] || null
}

/**
 * Check if a plugin has version configuration
 * @param {string} pluginName - The plugin identifier
 * @returns {boolean}
 */
export function hasVersions(pluginName) {
    return pluginName in versionConfig
}

/**
 * Get available versions for a plugin
 * @param {string} pluginName - The plugin identifier
 * @returns {array} Array of version strings
 */
export function getVersions(pluginName) {
    return versionConfig[pluginName]?.versions || []
}

/**
 * Get the latest version for a plugin
 * @param {string} pluginName - The plugin identifier
 * @returns {string|null} Latest version or null
 */
export function getLatestVersion(pluginName) {
    return versionConfig[pluginName]?.latest || null
}

/**
 * Check if a version is deprecated
 * @param {string} pluginName - The plugin identifier
 * @param {string} version - The version to check
 * @returns {boolean}
 */
export function isDeprecated(pluginName, version) {
    return versionConfig[pluginName]?.deprecated?.includes(version) || false
}
