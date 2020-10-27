`use strict`;

// Config
// =============================================================================
const name = `MDN Web Docs`;
const type = `light`;

// Opacity
// =============================================================================
const hidden = `00`;
const striking = `80`;
const subtle = `33`;

// Palette
// =============================================================================
const alto = `dcdcdc`;
const aquaHaze = `#eaf2f4`;
const black = `#212121`;
const cabaret = `#dd4a68`;
const calyspo = `#3d7e9a`;
const catskillWhite = `#f5f9fa`;
const deepCerulean = `#0077aa`;
const dustyGrey = `#999999`;
const freshEggplant = `#990055`;
const gallery = `#eeeeee`;
const geyser = `#dce3e5`;
const grey = `#8e8e8e`;
const limeade = `#669900`;
const malibu = `#83d0f2`;
const mineshaft = `#333333`;
const scienceBlue = `#015fdf`;
const sepiaSkin = `#9a6e3a`;
const slateGrey = `#708090`;
const tangerine = `#ee9900`;
const transparent = black + hidden;
const white = `#ffffff`;

// Exports
// =============================================================================
module.exports = {
  colors: {
    // Activity bar
    // -------------------------------------------------------------------------
    "activityBar.activeBackground": gallery,
    "activityBar.activeBorder": calyspo,
    "activityBar.activeFocusBorder": calyspo,
    "activityBar.background": white,
    "activityBar.border": geyser,
    "activityBar.foreground": mineshaft,
    "activityBar.inactiveForeground": mineshaft,
    "activityBarBadge.background": malibu,
    "activityBarBadge.foreground": mineshaft,

    // Badge colors
    // -------------------------------------------------------------------------
    "badge.background": malibu,
    "badge.foreground": mineshaft,

    // Base colors
    // -------------------------------------------------------------------------
    // descriptionForeground: ``,
    // errorForeground: ``,
    focusBorder: transparent,
    foreground: mineshaft,
    "icon.foreground": mineshaft,
    // 'selection.background': ``,
    "widget.shadow": grey,

    // Breadcrumbs colors
    // -------------------------------------------------------------------------
    "breadcrumb.activeSelectionForeground": mineshaft,
    "breadcrumb.focusForeground": calyspo,
    "breadcrumb.foreground": calyspo,
    "breadcrumbPicker.background": white,

    // Button control
    // -------------------------------------------------------------------------
    "button.background": scienceBlue,
    "button.foreground": white,
    // 'button.hoverBackground': ``,
    "checkbox.background": white,
    "checkbox.border": geyser,
    "checkbox.foreground": mineshaft,

    // Debug colors
    // -------------------------------------------------------------------------
    // 'debugTokenExpression.boolean': ``,
    // 'debugTokenExpression.error': ``,
    // 'debugTokenExpression.name': ``,
    // 'debugTokenExpression.number': ``,
    // 'debugTokenExpression.string': ``,
    // 'debugTokenExpression.value': ``,
    // 'debugToolBar.background': ``,
    // 'debugToolBar.border': ``,
    // 'debugView.exceptionLabelBackground': ``,
    // 'debugView.exceptionLabelForeground': ``,
    // 'debugView.stateLabelBackground': ``,
    // 'debugView.stateLabelForeground': ``,
    // 'debugView.valueChangedHighlight': ``,
    // 'editor.focusedStackFrameHighlightBackground': ``,
    // 'editor.stackFrameHighlightBackground': ``,
    // Debug icons colors
    // -------------------------------------------------------------------------
    // 'debugConsole.errorForeground': ``,
    // 'debugConsole.infoForeground': ``,
    // 'debugConsole.sourceForeground': ``,
    // 'debugConsole.warningForeground': ``,
    // 'debugConsoleInputIcon.foreground': ``,
    "debugIcon.breakpointCurrentStackframeForeground": scienceBlue,
    "debugIcon.breakpointDisabledForeground": scienceBlue,
    "debugIcon.breakpointForeground": scienceBlue,
    "debugIcon.breakpointStackframeForeground": scienceBlue,
    "debugIcon.breakpointUnverifiedForeground": scienceBlue,
    // 'debugIcon.continueForeground': ``,
    // 'debugIcon.disconnectForeground': ``,
    // 'debugIcon.pauseForeground': ``,
    // 'debugIcon.restartForeground': ``,
    // 'debugIcon.stepBackForeground': ``,
    // 'debugIcon.stepIntoForeground': ``,
    // 'debugIcon.stepOverForeground': ``,
    // 'debugIcon.stepOutForeground': ``,
    // 'debugIcon.startForeground': ``,
    // 'debugIcon.stopForeground': ``,

    // Diff editor colors
    // -------------------------------------------------------------------------
    "diffEditor.border": geyser,
    "diffEditor.diagonalFill": geyser,
    "diffEditor.insertedTextBackground": limeade + subtle,
    "diffEditor.insertedTextBorder": transparent,
    "diffEditor.removedTextBackground": freshEggplant + subtle,
    "diffEditor.removedTextBorder": transparent,

    // Dropdown control
    // -------------------------------------------------------------------------
    "dropdown.background": white,
    "dropdown.border": geyser,
    "dropdown.listBackground": white,
    "dropdown.foreground": calyspo,

    // Editor colors
    // -------------------------------------------------------------------------
    "editor.background": gallery,
    // 'editor.findMatchBackground': ``,
    // 'editor.findMatchBorder': ``,
    // 'editor.findMatchHighlightBackground': ``,
    // 'editor.findMatchHighlightBorder': ``,
    // 'editor.findRangeHighlightBackground': ``,
    // 'editor.findRangeHighlightBorder': ``,
    // 'editor.foldBackground': ``,
    // "editor.foreground": dustyGrey,
    // 'editor.hoverHighlightBackground': ``,
    // 'editor.inactiveSelectionBackground': ``,
    // 'editor.lineHighlightBackground': ``,
    // 'editor.lineHighlightBorder': ``,
    // 'editor.rangeHighlightBackground': ``,
    // 'editor.rangeHighlightBorder': ``,
    // 'editor.selectionBackground': ``,
    // 'editor.selectionForeground': ``,
    // 'editor.selectionHighlightBackground': ``,
    // 'editor.selectionHighlightBorder': ``,
    // 'editor.symbolHighlightBackground': ``,
    // 'editor.symbolHighlightBorder': ``,
    // 'editor.wordHighlightBackground': ``,
    // 'editor.wordHighlightBorder': ``,
    // 'editor.wordHighlightStrongBackground': ``,
    // 'editor.wordHighlightStrongBorder': ``,
    "editorBracketMatch.background": transparent,
    "editorBracketMatch.border": scienceBlue,
    "editorCursor.foreground": scienceBlue,
    // 'editorCodeLens.foreground': ``,
    // 'editorError.border': ``,
    // 'editorError.foreground': ``,
    "editorGutter.addedBackground": limeade,
    "editorGutter.background": transparent,
    "editorGutter.commentRangeForeground": slateGrey,
    "editorGutter.deletedBackground": freshEggplant,
    // 'editorGutter.foldingControlForeground': ``,
    "editorGutter.modifiedBackground": malibu,
    // 'editorHint.border': ``,
    // 'editorHint.foreground': ``,
    // 'editorIndentGuide.activeBackground': ``,
    // 'editorIndentGuide.background': ``,
    // 'editorInfo.border': ``,
    // 'editorInfo.foreground': ``,
    // "editorLineNumber.activeForeground": slateGrey,
    "editorLineNumber.foreground": dustyGrey,
    "editorLightBulb.foreground": scienceBlue,
    "editorLightBulbAutoFix.foreground": scienceBlue,
    // 'editorLink.activeForeground': ``,
    // 'editorOverviewRuler.addedForeground': ``,
    // 'editorOverviewRuler.background': ``,
    // 'editorOverviewRuler.border': ``,
    // 'editorOverviewRuler.bracketMatchForeground': ``,
    // 'editorOverviewRuler.deletedForeground': ``,
    // 'editorOverviewRuler.errorForeground': ``,
    // 'editorOverviewRuler.findMatchForeground': ``,
    // 'editorOverviewRuler.infoForeground': ``,
    // 'editorOverviewRuler.modifiedForeground': ``,
    // 'editorOverviewRuler.rangeHighlightForeground': ``,
    // 'editorOverviewRuler.selectionHighlightForeground': ``,
    // 'editorOverviewRuler.warningForeground': ``,
    // 'editorOverviewRuler.wordHighlightForeground': ``,
    // 'editorOverviewRuler.wordHighlightStrongForeground': ``,
    // 'editorUnnecessaryCode.border': ``,
    // 'editorUnnecessaryCode.opacity': ``,
    // 'editorRuler.foreground': `#ff0`,
    // 'editorWarning.border': ``,
    // 'editorWarning.foreground': ``,
    // 'editorWhitespace.foreground': ``,
    // 'problemsErrorIcon.foreground': ``,
    // 'problemsInfoIcon.foreground': ``,
    // 'problemsWarningIcon.foreground': ``,
    // 'searchEditor.findMatchBackground': ``,
    // 'searchEditor.findMatchBorder': ``,
    // 'searchEditor.textInputBorder': ``,
    // Editor group and tabs
    // -------------------------------------------------------------------------
    // 'editorGroup.border': ``,
    // 'editorGroup.dropBackground': ``,
    // 'editorGroup.emptyBackground': ``,
    // 'editorGroup.focusedEmptyBorder': ``,
    // 'editorGroupHeader.border': ``,
    // 'editorGroupHeader.noTabsBackground': ``,
    // 'editorGroupHeader.tabsBackground': ``,
    // 'editorGroupHeader.tabsBorder': ``,
    // 'editorPane.background': ``,
    // 'tab.activeBackground': ``,
    // 'tab.activeBorder': ``,
    // 'tab.activeBorderTop': ``,
    // 'tab.activeForeground': ``,
    // 'tab.activeModifiedBorder': ``,
    // 'tab.border': ``,
    // 'tab.hoverBackground': ``,
    // 'tab.hoverBorder': ``,
    // 'tab.hoverForeground': ``,
    // 'tab.inactiveBackground': ``,
    // 'tab.inactiveForeground': ``,
    // 'tab.inactiveModifiedBorder': ``,
    // 'tab.unfocusedActiveBackground': ``,
    // 'tab.unfocusedActiveBorderTop': ``,
    // 'tab.unfocusedActiveBorder': ``,
    // 'tab.unfocusedActiveForeground': ``,
    // 'tab.unfocusedActiveModifiedBorder': ``,
    // 'tab.unfocusedHoverBackground': ``,
    // 'tab.unfocusedHoverBorder': ``,
    // 'tab.unfocusedHoverForeground': ``,
    // 'tab.unfocusedInactiveBackground': ``,
    // 'tab.unfocusedInactiveForeground': ``,
    // 'tab.unfocusedInactiveModifiedBorder': ``,
    // Editor widget colors
    // -------------------------------------------------------------------------
    // 'debugExceptionWidget.background': ``,
    // 'debugExceptionWidget.border': ``,
    // 'editorHoverWidget.background': ``,
    // 'editorHoverWidget.border': ``,
    // 'editorHoverWidget.foreground': ``,
    // 'editorHoverWidget.statusBarBackground': ``,
    // 'editorMarkerNavigation.background': ``,
    // 'editorMarkerNavigationError.background': ``,
    // 'editorMarkerNavigationInfo.background': ``,
    // 'editorMarkerNavigationWarning.background': ``,
    // 'editorSuggestWidget.background': ``,
    // 'editorSuggestWidget.border': ``,
    // 'editorSuggestWidget.foreground': ``,
    // 'editorSuggestWidget.highlightForeground': ``,
    // 'editorSuggestWidget.selectedBackground': ``,
    // 'editorWidget.background': ``,
    // 'editorWidget.border': ``,
    // 'editorWidget.foreground': ``,
    // 'editorWidget.resizeBorder': ``,

    // Extension colors
    // -------------------------------------------------------------------------
    // 'extensionButton.prominentBackground': ``,
    // 'extensionButton.prominentForeground': ``,
    // 'extensionButton.prominentHoverBackground': ``,
    // 'extensionBadge.remoteBackground': ``,
    // 'extensionBadge.remoteForeground': ``,

    // Git colors
    // -------------------------------------------------------------------------
    // 'gitDecoration.addedResourceForeground': ``,
    // 'gitDecoration.conflictingResourceForeground': ``,
    // 'gitDecoration.deletedResourceForeground': ``,
    // 'gitDecoration.ignoredResourceForeground': ``,
    // 'gitDecoration.modifiedResourceForeground': ``,
    // 'gitDecoration.submoduleResourceForeground': ``,
    // 'gitDecoration.untrackedResourceForeground': ``,

    // Input control
    // -------------------------------------------------------------------------
    "input.background": white,
    "input.border": geyser,
    "input.foreground": mineshaft,
    "input.placeholderForeground": grey,
    // 'inputOption.activeBackground': ``,
    // 'inputOption.activeBorder': ``,
    // 'inputOption.activeForeground': ``,
    // 'inputValidation.errorBackground': ``,
    // 'inputValidation.errorBorder': ``,
    // 'inputValidation.errorForeground': ``,
    // 'inputValidation.infoBackground': ``,
    // 'inputValidation.infoBorder': ``,
    // 'inputValidation.infoForeground': ``,

    // Integrated terminal colors
    // -------------------------------------------------------------------------
    // 'terminal.ansiBlack': ``,
    // 'terminal.ansiBlue': ``,
    // 'terminal.ansiBrightBlack': ``,
    // 'terminal.ansiBrightBlue': ``,
    // 'terminal.ansiBrightCyan': ``,
    // 'terminal.ansiBrightGreen': ``,
    // 'terminal.ansiBrightMagenta': ``,
    // 'terminal.ansiBrightRed': ``,
    // 'terminal.ansiBrightWhite': ``,
    // 'terminal.ansiBrightYellow': ``,
    // 'terminal.ansiCyan': ``,
    // 'terminal.ansiGreen': ``,
    // 'terminal.ansiMagenta': ``,
    // 'terminal.ansiRed': ``,
    // 'terminal.ansiWhite': ``,
    // 'terminal.ansiYellow': ``,
    "terminal.background": black,
    "terminal.border": geyser,
    "terminal.foreground": white,
    // 'terminal.selectionBackground': ``,
    // 'terminalCursor.background': ``,
    // 'terminalCursor.foreground': ``,

    // Lists and trees
    // -------------------------------------------------------------------------
    // 'list.activeSelectionBackground': ``,
    // 'list.activeSelectionForeground': ``,
    // 'list.deemphasizedForeground': ``,
    // 'list.dropBackground': ``,
    // 'list.errorForeground': ``,
    // 'list.filterMatchBackground': ``,
    // 'list.filterMatchBorder': ``,
    // 'list.focusBackground': ``,
    // 'list.focusForeground': ``,
    // 'list.highlightForeground': ``,
    // 'list.hoverBackground': ``,
    // 'list.hoverForeground': ``,
    // 'list.inactiveFocusBackground': ``,
    // 'list.inactiveSelectionBackground': ``,
    // 'list.inactiveSelectionForeground': ``,
    // 'list.invalidItemForeground': ``,
    // 'list.warningForeground': ``,
    // 'listFilterWidget.background': ``,
    // 'listFilterWidget.noMatchesOutline': ``,
    // 'listFilterWidget.outline': ``,
    // 'tree.indentGuidesStroke': ``,

    // Menu bar colors
    // -------------------------------------------------------------------------
    // 'menu.background': ``,
    // 'menu.border': ``,
    // 'menu.foreground': ``,
    // 'menu.selectionBackground': ``,
    // 'menu.selectionBorder': ``,
    // 'menu.selectionForeground': ``,
    // 'menu.separatorBackground': ``,
    // 'menubar.selectionBackground': ``,
    // 'menubar.selectionBorder': ``,
    // 'menubar.selectionForeground': ``,

    // Merge conflicts colors
    // -------------------------------------------------------------------------
    // 'editorOverviewRuler.commonContentForeground': ``,
    // 'editorOverviewRuler.currentContentForeground': ``,
    // 'editorOverviewRuler.incomingContentForeground': ``,
    // 'merge.border': ``,
    // 'merge.commonContentBackground': ``,
    // 'merge.commonHeaderBackground': ``,
    // 'merge.currentContentBackground': ``,
    // 'merge.currentHeaderBackground': ``,
    // 'merge.incomingContentBackground': ``,
    // 'merge.incomingHeaderBackground': ``,

    // Minimap
    // -------------------------------------------------------------------------
    // 'minimap.background': ``,
    // 'minimap.errorHighlight': ``,
    // 'minimap.findMatchHighlight': ``,
    // 'minimap.selectionHighlight': ``,
    // 'minimap.warningHighlight': ``,
    // 'minimapGutter.addedBackground': ``,
    // 'minimapGutter.deletedBackground': ``,
    // 'minimapGutter.modifiedBackground': ``,
    // 'minimapSlider.activeBackground': ``,
    // 'minimapSlider.background': ``,
    // 'minimapSlider.hoverBackground': ``,

    // Notification colors
    // -------------------------------------------------------------------------
    "notification.background": white,
    // 'notification.buttonBackground': ``,
    // 'notification.buttonForeground': ``,
    // 'notification.buttonHoverBackground': ``,
    // 'notification.errorBackground': ``,
    // 'notification.errorForeground': ``,
    // 'notification.foreground': ``,
    // 'notification.infoBackground': ``,
    // 'notification.infoForeground': ``,
    // 'notification.warningBackground': ``,
    // 'notification.warningForeground': ``,
    // 'notificationCenter.border': ``,
    // 'notificationCenterHeader.background': ``,
    // 'notificationCenterHeader.foreground': ``,
    // 'notificationLink.foreground': ``,
    // 'notifications.background': ``,
    // 'notifications.border': ``,
    // 'notifications.foreground': ``,
    // 'notificationsErrorIcon.foreground': ``,
    // 'notificationsInfoIcon.foreground': ``,
    // 'notificationsWarningIcon.foreground': ``,
    // 'notificationToast.border': ``,
    // Panel colors
    // -------------------------------------------------------------------------
    "panel.background": white,
    "panel.border": geyser,
    // 'panelInput.border': freshEggplant,
    // 'panelSection.border': freshEggplant,
    "panelSectionHeader.background": `#f0f`,
    // 'panelSectionHeader.border': ``,
    // 'panelSectionHeader.foreground': ``,
    "panelTitle.activeBorder": mineshaft,
    "panelTitle.activeForeground": mineshaft,
    "panelTitle.inactiveForeground": calyspo,

    // Peek view colors
    // -------------------------------------------------------------------------
    // 'peekView.border': ``,
    // 'peekViewEditor.background': ``,
    // 'peekViewEditor.matchHighlightBackground': ``,
    // 'peekViewEditor.matchHighlightBorder': ``,
    // 'peekViewEditorGutter.background': ``,
    // 'peekViewResult.background': ``,
    // 'peekViewResult.fileForeground': ``,
    // 'peekViewResult.lineForeground': ``,
    // 'peekViewResult.matchHighlightBackground': ``,
    // 'peekViewResult.selectionBackground': ``,
    // 'peekViewResult.selectionForeground': ``,
    // 'peekViewTitle.background': ``,
    // 'peekViewTitleDescription.foreground': ``,
    // 'peekViewTitleLabel.foreground': ``,

    // Preview colors
    // -------------------------------------------------------------------------
    "imagePreview.border": geyser,

    // Progress bar
    // -------------------------------------------------------------------------
    "progressBar.background": calyspo,

    // Quick picker colors
    // -------------------------------------------------------------------------
    "pickerGroup.border": grey,
    "pickerGroup.foreground": calyspo,
    "quickInput.foreground": mineshaft,
    "quickInputTitle.background": white,

    // Scrollbar control
    // -------------------------------------------------------------------------
    "scrollbar.shadow": grey, // transparent?
    // 'scrollbarSlider.activeBackground': ``,
    // 'scrollbarSlider.background': ``,
    // 'scrollbarSlider.hoverBackground': ``,

    // Settings editor colors
    // -------------------------------------------------------------------------
    // 'settings.checkboxBackground': ``,
    // 'settings.checkboxBorder': ``,
    // 'settings.checkboxForeground': ``,
    // 'settings.dropdownBackground': ``,
    // 'settings.dropdownBorder': ``,
    // 'settings.dropdownForeground': ``,
    // 'settings.dropdownListBorder': ``,
    // 'settings.headerForeground': ``,
    // 'settings.modifiedItemIndicator': ``,
    // 'settings.numberInputBackground': ``,
    // 'settings.numberInputBorder': ``,
    // 'settings.numberInputForeground': ``,
    // 'settings.textInputBackground': ``,
    // 'settings.textInputBorder': ``,
    // 'settings.textInputForeground': ``,

    // Side bar
    // -------------------------------------------------------------------------
    "sideBar.background": gallery,
    "sideBar.border": geyser,
    "sideBar.foreground": calyspo,
    "sideBarSectionHeader.background": gallery,
    "sideBarSectionHeader.border": transparent,
    "sideBarSectionHeader.foreground": calyspo,
    "sideBarTitle.foreground": mineshaft,

    // Snippets colors
    // -------------------------------------------------------------------------
    // 'editor.snippetFinalTabstopHighlightBackground': ``,
    // 'editor.snippetFinalTabstopHighlightBorder': ``,
    // 'editor.snippetTabstopHighlightBackground': ``,
    // 'editor.snippetTabstopHighlightBorder': ``,

    // Source control colors
    // -------------------------------------------------------------------------
    "scm.providerBorder": geyser,

    // Status bar colors
    // -------------------------------------------------------------------------
    // 'statusBar.background': ``,
    // 'statusBar.border': ``,
    // 'statusBar.foreground': ``,
    // 'statusBar.debuggingBackground': ``,
    // 'statusBar.debuggingBorder': ``,
    // 'statusBar.debuggingForeground': ``,
    // 'statusBar.noFolderBackground': ``,
    // 'statusBar.noFolderBorder': ``,
    // 'statusBar.noFolderForeground': ``,
    // 'statusBarItem.activeBackground': ``,
    // 'statusBarItem.hoverBackground': ``,
    // 'statusBarItem.prominentBackground': ``,
    // 'statusBarItem.prominentForeground': ``,
    // 'statusBarItem.prominentHoverBackground': ``,
    // 'statusBarItem.remoteBackground': ``,
    // 'statusBarItem.remoteForeground': ``,
    // Symbol icons colors
    // -------------------------------------------------------------------------
    // 'symbolIcon.arrayForeground': ``,
    // 'symbolIcon.booleanForeground': ``,
    // 'symbolIcon.classForeground': ``,
    // 'symbolIcon.colorForeground': ``,
    // 'symbolIcon.constantForeground': ``,
    // 'symbolIcon.constructorForeground': ``,
    // 'symbolIcon.enumeratorForeground': ``,
    // 'symbolIcon.enumeratorMemberForeground': ``,
    // 'symbolIcon.eventForeground': ``,
    // 'symbolIcon.fieldForeground': ``,
    // 'symbolIcon.fileForeground': ``,
    // 'symbolIcon.folderForeground': ``,
    // 'symbolIcon.functionForeground': ``,
    // 'symbolIcon.interfaceForeground': ``,
    // 'symbolIcon.keyForeground': ``,
    // 'symbolIcon.keywordForeground': ``,
    // 'symbolIcon.methodForeground': ``,
    // 'symbolIcon.moduleForeground': ``,
    // 'symbolIcon.namespaceForeground': ``,
    // 'symbolIcon.nullForeground': ``,
    // 'symbolIcon.numberForeground': ``,
    // 'symbolIcon.objectForeground': ``,
    // 'symbolIcon.operatorForeground': ``,
    // 'symbolIcon.packageForeground': ``,
    // 'symbolIcon.propertyForeground': ``,
    // 'symbolIcon.referenceForeground': ``,
    // 'symbolIcon.snippetForeground': ``,
    // 'symbolIcon.stringForeground': ``,
    // 'symbolIcon.structForeground': ``,
    // 'symbolIcon.textForeground': ``,
    // 'symbolIcon.typeParameterForeground': ``,
    // 'symbolIcon.unitForeground': ``,
    // 'symbolIcon.variableForeground': ``,
    // Text colors
    // -------------------------------------------------------------------------
    // 'textBlockQuote.background': ``,
    // 'textBlockQuote.border': ``,
    "textCodeBlock.background": alto + striking,
    "textLink.activeForeground": calyspo,
    "textLink.foreground": calyspo,
    "textPreformat.foreground": mineshaft,
    // 'textSeparator.foreground': ``,

    // Title bar colors
    // -------------------------------------------------------------------------
    "titleBar.activeBackground": mineshaft,
    "titleBar.activeForeground": white,
    "titleBar.border": mineshaft,
    "titleBar.inactiveBackground": mineshaft,
    "titleBar.inactiveForeground": white,

    // Welcome page colors
    // -------------------------------------------------------------------------
    "walkThrough.embeddedEditorBackground": gallery,
    "welcomePage.background": white,
    "welcomePage.buttonBackground": scienceBlue,

    // Window border
    // -------------------------------------------------------------------------
    "window.activeBorder": dustyGrey,
    "window.inactiveBorder": dustyGrey
  },
  name,
  tokenColors: [
    // Base tokens
    // -------------------------------------------------------------------------
    {
      name: `Base comments`,
      scope: `comment`,
      settings: {
        foreground: slateGrey
      }
    },
    {
      name: `Base constants`,
      scope: `constant`,
      settings: {
        foreground: freshEggplant
      }
    },
    {
      name: `Base entities`,
      scope: `constant.character.entity`,
      settings: {
        foreground: sepiaSkin
      }
    },
    {
      name: `Base keywords`,
      scope: `keyword`,
      settings: {
        foreground: deepCerulean
      }
    },
    {
      name: `Base storage`,
      scope: `storage`,
      settings: {
        foreground: deepCerulean
      }
    },
    {
      name: `Base strings`,
      scope: `string`,
      settings: {
        foreground: deepCerulean
      }
    },
    {
      name: `Base support`,
      scope: `support`,
      settings: {
        foreground: mineshaft
      }
    },
    {
      name: `Base variables`,
      scope: `variable`,
      settings: {
        foreground: tangerine
      }
    },

    // CSS tokens
    // -------------------------------------------------------------------------
    {
      name: `CSS animations`,
      scope: `variable.parameter.keyframe-list.css`,
      settings: {
        foreground: deepCerulean
      }
    },
    {
      name: `CSS animation keyframes`,
      scope: [
        `entity.other.keyframe-offset.css`,
        `entity.other.keyframe-offset.percentage.css`
      ],
      settings: {
        foreground: limeade
      }
    },
    {
      name: `CSS attributes`,
      scope: `entity.other.attribute-name.css`,
      settings: {
        foreground: limeade
      }
    },
    {
      name: `CSS classes`,
      scope: `entity.other.attribute-name.class.css`,
      settings: {
        foreground: limeade
      }
    },
    {
      name: `CSS functions`,
      scope: [
        `support.function.calc.css`,
        `support.function.gradient.css`,
        `support.function.misc.css`,
        `support.function.timing-function.css`,
        `support.function.transform.css`
      ],
      settings: {
        foreground: cabaret
      }
    },
    {
      name: `CSS hexadecimals`,
      scope: [
        `constant.other.color.rgb-value.hex.css`,
        `punctuation.definition.constant.css`
      ],
      settings: {
        foreground: mineshaft
      }
    },
    {
      name: `CSS ids`,
      scope: `entity.other.attribute-name.id.css`,
      settings: {
        foreground: limeade
      }
    },
    {
      name: `CSS important`,
      scope: `keyword.other.important.css`,
      settings: {
        fontStyle: `bold`,
        foreground: tangerine
      }
    },
    {
      name: `CSS operators`,
      scope: [
        `keyword.operator.arithmetic.css`,
        `keyword.operator.combinator.css`,
        `keyword.operator.pattern.css`
      ],
      settings: {
        foreground: sepiaSkin
      }
    },
    {
      name: `CSS properties`,
      scope: [
        `support.type.property-name.css`,
        `support.type.vendored.property-name.css`
      ],
      settings: {
        foreground: freshEggplant
      }
    },
    {
      name: `CSS property values`,
      scope: [
        `meta.property-value.css`,
        `support.constant.color.current.css`,
        `support.constant.property-value.css`
      ],
      settings: {
        foreground: mineshaft
      }
    },
    {
      name: `CSS pseudo`,
      scope: [
        `entity.other.attribute-name.pseudo-class.css`,
        `entity.other.attribute-name.pseudo-element.css`
      ],
      settings: {
        foreground: limeade
      }
    },
    {
      name: `CSS strings`,
      scope: [`string.quoted.double.css`, `string.quoted.single.css`],
      settings: {
        foreground: sepiaSkin
      }
    },
    {
      name: `CSS tags`,
      scope: `entity.name.tag.css`,
      settings: {
        foreground: limeade
      }
    },
    {
      name: `CSS units`,
      scope: [
        `keyword.other.unit.%.css`,
        `keyword.other.unit.ch.css`,
        `keyword.other.unit.cm.css`,
        `keyword.other.unit.deg.css`,
        `keyword.other.unit.em.css`,
        `keyword.other.unit.ex.css`,
        `keyword.other.unit.in.css`,
        `keyword.other.unit.mm.css`,
        `keyword.other.unit.ms.css`,
        `keyword.other.unit.pc.css`,
        `keyword.other.unit.percentage.css`,
        `keyword.other.unit.pt.css`,
        `keyword.other.unit.px.css`,
        `keyword.other.unit.q.css`,
        `keyword.other.unit.rem.css`,
        `keyword.other.unit.s.css`,
        `keyword.other.unit.vmax.css`,
        `keyword.other.unit.vmin.css`,
        `keyword.other.unit.vh.css`,
        `keyword.other.unit.vw.css`
      ],
      settings: {
        foreground: mineshaft
      }
    },

    // HTML tokens
    // -------------------------------------------------------------------------
    {
      name: `HTML attributes`,
      scope: `entity.other.attribute-name.html`,
      settings: {
        foreground: limeade
      }
    },
    {
      name: `HTML brackets`,
      scope: [
        `punctuation.definition.string.begin.html`,
        `punctuation.definition.string.end.html`,
        `punctuation.definition.tag.begin.html`,
        `punctuation.definition.tag.end.html`,
        `punctuation.separator.key-value.html`
      ],
      settings: {
        foreground: dustyGrey
      }
    },
    {
      name: `HTML foreground`,
      scope: `text.html.derivative`,
      settings: {
        foreground: mineshaft
      }
    },
    {
      name: `HTML tags`,
      scope: `entity.name.tag.html`,
      settings: {
        foreground: freshEggplant
      }
    }
  ],
  type
};
