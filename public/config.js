System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "vendor.min.js": [
      "npm:redux-thunk@2.2.0.js",
      "npm:redux-thunk@2.2.0/lib/index.js",
      "npm:react-redux-simple-validate@1.0.10.js",
      "npm:react-redux-simple-validate@1.0.10/lib/index.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formActions.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formConstants.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formReducer.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formError.js",
      "npm:react@15.5.4.js",
      "npm:react@15.5.4/react.js",
      "npm:react@15.5.4/lib/React.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "npm:react@15.5.4/lib/ReactElementValidator.js",
      "npm:fbjs@0.8.12/lib/warning.js",
      "npm:fbjs@0.8.12/lib/emptyFunction.js",
      "npm:react@15.5.4/lib/getIteratorFn.js",
      "npm:react@15.5.4/lib/canDefineProperty.js",
      "npm:react@15.5.4/lib/checkReactTypeSpec.js",
      "npm:react@15.5.4/lib/ReactComponentTreeHook.js",
      "npm:fbjs@0.8.12/lib/invariant.js",
      "npm:react@15.5.4/lib/ReactCurrentOwner.js",
      "npm:react@15.5.4/lib/reactProdInvariant.js",
      "npm:react@15.5.4/lib/ReactPropTypesSecret.js",
      "npm:react@15.5.4/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.5.4/lib/ReactElement.js",
      "npm:react@15.5.4/lib/ReactElementSymbol.js",
      "npm:object-assign@4.1.1.js",
      "npm:object-assign@4.1.1/index.js",
      "npm:react@15.5.4/lib/onlyChild.js",
      "npm:react@15.5.4/lib/ReactVersion.js",
      "npm:react@15.5.4/lib/ReactPropTypes.js",
      "npm:prop-types@15.5.8/factory.js",
      "npm:prop-types@15.5.8/factoryWithTypeCheckers.js",
      "npm:prop-types@15.5.8/checkPropTypes.js",
      "npm:prop-types@15.5.8/lib/ReactPropTypesSecret.js",
      "npm:react@15.5.4/lib/ReactDOMFactories.js",
      "npm:react@15.5.4/lib/ReactClass.js",
      "npm:fbjs@0.8.12/lib/emptyObject.js",
      "npm:react@15.5.4/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.5.4/lib/ReactComponent.js",
      "npm:react@15.5.4/lib/ReactPureComponent.js",
      "npm:react@15.5.4/lib/ReactChildren.js",
      "npm:react@15.5.4/lib/traverseAllChildren.js",
      "npm:react@15.5.4/lib/KeyEscapeUtils.js",
      "npm:react@15.5.4/lib/PooledClass.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formGroupAsync.js",
      "npm:lodash@4.17.4/includes.js",
      "npm:lodash@4.17.4/values.js",
      "npm:lodash@4.17.4/keys.js",
      "npm:lodash@4.17.4/isArrayLike.js",
      "npm:lodash@4.17.4/isLength.js",
      "npm:lodash@4.17.4/isFunction.js",
      "npm:lodash@4.17.4/isObject.js",
      "npm:lodash@4.17.4/_baseGetTag.js",
      "npm:lodash@4.17.4/_objectToString.js",
      "npm:lodash@4.17.4/_getRawTag.js",
      "npm:lodash@4.17.4/_Symbol.js",
      "npm:lodash@4.17.4/_root.js",
      "npm:lodash@4.17.4/_freeGlobal.js",
      "npm:lodash@4.17.4/_baseKeys.js",
      "npm:lodash@4.17.4/_nativeKeys.js",
      "npm:lodash@4.17.4/_overArg.js",
      "npm:lodash@4.17.4/_isPrototype.js",
      "npm:lodash@4.17.4/_arrayLikeKeys.js",
      "npm:lodash@4.17.4/isTypedArray.js",
      "npm:lodash@4.17.4/_nodeUtil.js",
      "npm:lodash@4.17.4/_baseUnary.js",
      "npm:lodash@4.17.4/_baseIsTypedArray.js",
      "npm:lodash@4.17.4/isObjectLike.js",
      "npm:lodash@4.17.4/_isIndex.js",
      "npm:lodash@4.17.4/isBuffer.js",
      "npm:lodash@4.17.4/stubFalse.js",
      "npm:lodash@4.17.4/isArray.js",
      "npm:lodash@4.17.4/isArguments.js",
      "npm:lodash@4.17.4/_baseIsArguments.js",
      "npm:lodash@4.17.4/_baseTimes.js",
      "npm:lodash@4.17.4/_baseValues.js",
      "npm:lodash@4.17.4/_arrayMap.js",
      "npm:lodash@4.17.4/toInteger.js",
      "npm:lodash@4.17.4/toFinite.js",
      "npm:lodash@4.17.4/toNumber.js",
      "npm:lodash@4.17.4/isSymbol.js",
      "npm:lodash@4.17.4/isString.js",
      "npm:lodash@4.17.4/_baseIndexOf.js",
      "npm:lodash@4.17.4/_strictIndexOf.js",
      "npm:lodash@4.17.4/_baseIsNaN.js",
      "npm:lodash@4.17.4/_baseFindIndex.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formGroup.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formUtils.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formElement/formElementFromReact.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formElement/formElementUtils.js",
      "npm:lodash@4.17.4/pick.js",
      "npm:lodash@4.17.4/_flatRest.js",
      "npm:lodash@4.17.4/_setToString.js",
      "npm:lodash@4.17.4/_shortOut.js",
      "npm:lodash@4.17.4/_baseSetToString.js",
      "npm:lodash@4.17.4/identity.js",
      "npm:lodash@4.17.4/_defineProperty.js",
      "npm:lodash@4.17.4/_getNative.js",
      "npm:lodash@4.17.4/_getValue.js",
      "npm:lodash@4.17.4/_baseIsNative.js",
      "npm:lodash@4.17.4/_toSource.js",
      "npm:lodash@4.17.4/_isMasked.js",
      "npm:lodash@4.17.4/_coreJsData.js",
      "npm:lodash@4.17.4/constant.js",
      "npm:lodash@4.17.4/_overRest.js",
      "npm:lodash@4.17.4/_apply.js",
      "npm:lodash@4.17.4/flatten.js",
      "npm:lodash@4.17.4/_baseFlatten.js",
      "npm:lodash@4.17.4/_isFlattenable.js",
      "npm:lodash@4.17.4/_arrayPush.js",
      "npm:lodash@4.17.4/_basePick.js",
      "npm:lodash@4.17.4/hasIn.js",
      "npm:lodash@4.17.4/_hasPath.js",
      "npm:lodash@4.17.4/_toKey.js",
      "npm:lodash@4.17.4/_castPath.js",
      "npm:lodash@4.17.4/toString.js",
      "npm:lodash@4.17.4/_baseToString.js",
      "npm:lodash@4.17.4/_stringToPath.js",
      "npm:lodash@4.17.4/_memoizeCapped.js",
      "npm:lodash@4.17.4/memoize.js",
      "npm:lodash@4.17.4/_MapCache.js",
      "npm:lodash@4.17.4/_mapCacheSet.js",
      "npm:lodash@4.17.4/_getMapData.js",
      "npm:lodash@4.17.4/_isKeyable.js",
      "npm:lodash@4.17.4/_mapCacheHas.js",
      "npm:lodash@4.17.4/_mapCacheGet.js",
      "npm:lodash@4.17.4/_mapCacheDelete.js",
      "npm:lodash@4.17.4/_mapCacheClear.js",
      "npm:lodash@4.17.4/_Map.js",
      "npm:lodash@4.17.4/_ListCache.js",
      "npm:lodash@4.17.4/_listCacheSet.js",
      "npm:lodash@4.17.4/_assocIndexOf.js",
      "npm:lodash@4.17.4/eq.js",
      "npm:lodash@4.17.4/_listCacheHas.js",
      "npm:lodash@4.17.4/_listCacheGet.js",
      "npm:lodash@4.17.4/_listCacheDelete.js",
      "npm:lodash@4.17.4/_listCacheClear.js",
      "npm:lodash@4.17.4/_Hash.js",
      "npm:lodash@4.17.4/_hashSet.js",
      "npm:lodash@4.17.4/_nativeCreate.js",
      "npm:lodash@4.17.4/_hashHas.js",
      "npm:lodash@4.17.4/_hashGet.js",
      "npm:lodash@4.17.4/_hashDelete.js",
      "npm:lodash@4.17.4/_hashClear.js",
      "npm:lodash@4.17.4/_isKey.js",
      "npm:lodash@4.17.4/_baseHasIn.js",
      "npm:lodash@4.17.4/_basePickBy.js",
      "npm:lodash@4.17.4/_baseSet.js",
      "npm:lodash@4.17.4/_assignValue.js",
      "npm:lodash@4.17.4/_baseAssignValue.js",
      "npm:lodash@4.17.4/_baseGet.js",
      "npm:lodash@4.17.4/omit.js",
      "npm:lodash@4.17.4/_getAllKeysIn.js",
      "npm:lodash@4.17.4/keysIn.js",
      "npm:lodash@4.17.4/_baseKeysIn.js",
      "npm:lodash@4.17.4/_nativeKeysIn.js",
      "npm:lodash@4.17.4/_getSymbolsIn.js",
      "npm:lodash@4.17.4/stubArray.js",
      "npm:lodash@4.17.4/_getSymbols.js",
      "npm:lodash@4.17.4/_arrayFilter.js",
      "npm:lodash@4.17.4/_getPrototype.js",
      "npm:lodash@4.17.4/_baseGetAllKeys.js",
      "npm:lodash@4.17.4/_customOmitClone.js",
      "npm:lodash@4.17.4/isPlainObject.js",
      "npm:lodash@4.17.4/_copyObject.js",
      "npm:lodash@4.17.4/_baseUnset.js",
      "npm:lodash@4.17.4/_parent.js",
      "npm:lodash@4.17.4/_baseSlice.js",
      "npm:lodash@4.17.4/last.js",
      "npm:lodash@4.17.4/_baseClone.js",
      "npm:lodash@4.17.4/_initCloneObject.js",
      "npm:lodash@4.17.4/_baseCreate.js",
      "npm:lodash@4.17.4/_initCloneByTag.js",
      "npm:lodash@4.17.4/_cloneTypedArray.js",
      "npm:lodash@4.17.4/_cloneArrayBuffer.js",
      "npm:lodash@4.17.4/_Uint8Array.js",
      "npm:lodash@4.17.4/_cloneSymbol.js",
      "npm:lodash@4.17.4/_cloneSet.js",
      "npm:lodash@4.17.4/_setToArray.js",
      "npm:lodash@4.17.4/_arrayReduce.js",
      "npm:lodash@4.17.4/_addSetEntry.js",
      "npm:lodash@4.17.4/_cloneRegExp.js",
      "npm:lodash@4.17.4/_cloneMap.js",
      "npm:lodash@4.17.4/_mapToArray.js",
      "npm:lodash@4.17.4/_addMapEntry.js",
      "npm:lodash@4.17.4/_cloneDataView.js",
      "npm:lodash@4.17.4/_initCloneArray.js",
      "npm:lodash@4.17.4/_getTag.js",
      "npm:lodash@4.17.4/_WeakMap.js",
      "npm:lodash@4.17.4/_Set.js",
      "npm:lodash@4.17.4/_Promise.js",
      "npm:lodash@4.17.4/_DataView.js",
      "npm:lodash@4.17.4/_getAllKeys.js",
      "npm:lodash@4.17.4/_copySymbolsIn.js",
      "npm:lodash@4.17.4/_copySymbols.js",
      "npm:lodash@4.17.4/_copyArray.js",
      "npm:lodash@4.17.4/_cloneBuffer.js",
      "npm:lodash@4.17.4/_baseAssignIn.js",
      "npm:lodash@4.17.4/_baseAssign.js",
      "npm:lodash@4.17.4/_arrayEach.js",
      "npm:lodash@4.17.4/_Stack.js",
      "npm:lodash@4.17.4/_stackSet.js",
      "npm:lodash@4.17.4/_stackHas.js",
      "npm:lodash@4.17.4/_stackGet.js",
      "npm:lodash@4.17.4/_stackDelete.js",
      "npm:lodash@4.17.4/_stackClear.js",
      "npm:lodash@4.17.4/find.js",
      "npm:lodash@4.17.4/findIndex.js",
      "npm:lodash@4.17.4/_baseIteratee.js",
      "npm:lodash@4.17.4/property.js",
      "npm:lodash@4.17.4/_basePropertyDeep.js",
      "npm:lodash@4.17.4/_baseProperty.js",
      "npm:lodash@4.17.4/_baseMatchesProperty.js",
      "npm:lodash@4.17.4/_matchesStrictComparable.js",
      "npm:lodash@4.17.4/_isStrictComparable.js",
      "npm:lodash@4.17.4/get.js",
      "npm:lodash@4.17.4/_baseIsEqual.js",
      "npm:lodash@4.17.4/_baseIsEqualDeep.js",
      "npm:lodash@4.17.4/_equalObjects.js",
      "npm:lodash@4.17.4/_equalByTag.js",
      "npm:lodash@4.17.4/_equalArrays.js",
      "npm:lodash@4.17.4/_cacheHas.js",
      "npm:lodash@4.17.4/_arraySome.js",
      "npm:lodash@4.17.4/_SetCache.js",
      "npm:lodash@4.17.4/_setCacheHas.js",
      "npm:lodash@4.17.4/_setCacheAdd.js",
      "npm:lodash@4.17.4/_baseMatches.js",
      "npm:lodash@4.17.4/_getMatchData.js",
      "npm:lodash@4.17.4/_baseIsMatch.js",
      "npm:lodash@4.17.4/_createFind.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formBuilder.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formElement/formElementFromEvt.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/formElement/formElementFromState.js",
      "npm:lodash@4.17.4/isEmpty.js",
      "npm:react-redux-simple-validate@1.0.10/lib/validators/validator.js",
      "npm:react-redux-simple-validate@1.0.10/lib/validators/adapters/equalTo.js",
      "npm:validate.js@0.10.0.js",
      "npm:validate.js@0.10.0/validate.js",
      "npm:react-redux-simple-validate@1.0.10/lib/validators/adapters/pattern.js",
      "npm:react-redux-simple-validate@1.0.10/lib/validators/adapters/maxlength.js",
      "npm:react-redux-simple-validate@1.0.10/lib/validators/adapters/minlength.js",
      "npm:react-redux-simple-validate@1.0.10/lib/validators/adapters/required.js",
      "npm:react-redux@5.0.4.js",
      "npm:react-redux@5.0.4/lib/index.js",
      "npm:react-redux@5.0.4/lib/connect/connect.js",
      "npm:react-redux@5.0.4/lib/connect/selectorFactory.js",
      "npm:react-redux@5.0.4/lib/connect/verifySubselectors.js",
      "npm:react-redux@5.0.4/lib/utils/warning.js",
      "npm:react-redux@5.0.4/lib/connect/mergeProps.js",
      "npm:react-redux@5.0.4/lib/utils/verifyPlainObject.js",
      "npm:react-redux@5.0.4/lib/connect/mapStateToProps.js",
      "npm:react-redux@5.0.4/lib/connect/wrapMapToProps.js",
      "npm:react-redux@5.0.4/lib/connect/mapDispatchToProps.js",
      "npm:redux@3.6.0.js",
      "npm:redux@3.6.0/lib/index.js",
      "npm:redux@3.6.0/lib/utils/warning.js",
      "npm:redux@3.6.0/lib/compose.js",
      "npm:redux@3.6.0/lib/applyMiddleware.js",
      "npm:redux@3.6.0/lib/bindActionCreators.js",
      "npm:redux@3.6.0/lib/combineReducers.js",
      "npm:redux@3.6.0/lib/createStore.js",
      "npm:symbol-observable@1.0.4.js",
      "npm:symbol-observable@1.0.4/index.js",
      "npm:symbol-observable@1.0.4/lib/index.js",
      "npm:symbol-observable@1.0.4/lib/ponyfill.js",
      "npm:react-redux@5.0.4/lib/utils/shallowEqual.js",
      "npm:react-redux@5.0.4/lib/components/connectAdvanced.js",
      "npm:react-redux@5.0.4/lib/utils/PropTypes.js",
      "npm:prop-types@15.5.8.js",
      "npm:prop-types@15.5.8/index.js",
      "npm:prop-types@15.5.8/factoryWithThrowingShims.js",
      "npm:react-redux@5.0.4/lib/utils/Subscription.js",
      "npm:invariant@2.2.2.js",
      "npm:invariant@2.2.2/browser.js",
      "npm:hoist-non-react-statics@1.2.0.js",
      "npm:hoist-non-react-statics@1.2.0/index.js",
      "npm:react-redux@5.0.4/lib/components/Provider.js",
      "npm:react-redux-simple-validate@1.0.10/lib/forms/form.js",
      "npm:react-dom@15.5.4.js",
      "npm:react-dom@15.5.4/index.js",
      "npm:react-dom@15.5.4/lib/ReactDOM.js",
      "npm:react-dom@15.5.4/lib/ReactDOMInvalidARIAHook.js",
      "npm:react-dom@15.5.4/lib/DOMProperty.js",
      "npm:react-dom@15.5.4/lib/reactProdInvariant.js",
      "npm:react-dom@15.5.4/lib/ReactDOMNullInputValuePropHook.js",
      "npm:react-dom@15.5.4/lib/ReactDOMUnknownPropertyHook.js",
      "npm:react-dom@15.5.4/lib/EventPluginRegistry.js",
      "npm:react-dom@15.5.4/lib/ReactInstrumentation.js",
      "npm:react-dom@15.5.4/lib/ReactDebugTool.js",
      "npm:fbjs@0.8.12/lib/performanceNow.js",
      "npm:fbjs@0.8.12/lib/performance.js",
      "npm:fbjs@0.8.12/lib/ExecutionEnvironment.js",
      "npm:react-dom@15.5.4/lib/ReactHostOperationHistoryHook.js",
      "npm:react-dom@15.5.4/lib/ReactInvalidSetStateWarningHook.js",
      "npm:react-dom@15.5.4/lib/renderSubtreeIntoContainer.js",
      "npm:react-dom@15.5.4/lib/ReactMount.js",
      "npm:react-dom@15.5.4/lib/shouldUpdateReactComponent.js",
      "npm:react-dom@15.5.4/lib/setInnerHTML.js",
      "npm:react-dom@15.5.4/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react-dom@15.5.4/lib/DOMNamespaces.js",
      "npm:react-dom@15.5.4/lib/instantiateReactComponent.js",
      "npm:react@15.5.4/lib/getNextDebugID.js",
      "npm:react-dom@15.5.4/lib/ReactHostComponent.js",
      "npm:react-dom@15.5.4/lib/ReactEmptyComponent.js",
      "npm:react-dom@15.5.4/lib/ReactCompositeComponent.js",
      "npm:fbjs@0.8.12/lib/shallowEqual.js",
      "npm:react-dom@15.5.4/lib/checkReactTypeSpec.js",
      "npm:react-dom@15.5.4/lib/ReactPropTypesSecret.js",
      "npm:react-dom@15.5.4/lib/ReactPropTypeLocationNames.js",
      "npm:react-dom@15.5.4/lib/ReactReconciler.js",
      "npm:react-dom@15.5.4/lib/ReactRef.js",
      "npm:react-dom@15.5.4/lib/ReactOwner.js",
      "npm:react-dom@15.5.4/lib/ReactNodeTypes.js",
      "npm:react-dom@15.5.4/lib/ReactInstanceMap.js",
      "npm:react-dom@15.5.4/lib/ReactErrorUtils.js",
      "npm:react-dom@15.5.4/lib/ReactComponentEnvironment.js",
      "npm:react-dom@15.5.4/lib/ReactUpdates.js",
      "npm:react-dom@15.5.4/lib/Transaction.js",
      "npm:react-dom@15.5.4/lib/ReactFeatureFlags.js",
      "npm:react-dom@15.5.4/lib/PooledClass.js",
      "npm:react-dom@15.5.4/lib/CallbackQueue.js",
      "npm:react-dom@15.5.4/lib/ReactUpdateQueue.js",
      "npm:react-dom@15.5.4/lib/ReactMarkupChecksum.js",
      "npm:react-dom@15.5.4/lib/adler32.js",
      "npm:react-dom@15.5.4/lib/ReactDOMFeatureFlags.js",
      "npm:react-dom@15.5.4/lib/ReactDOMContainerInfo.js",
      "npm:react-dom@15.5.4/lib/validateDOMNesting.js",
      "npm:react-dom@15.5.4/lib/ReactDOMComponentTree.js",
      "npm:react-dom@15.5.4/lib/ReactDOMComponentFlags.js",
      "npm:react-dom@15.5.4/lib/ReactBrowserEventEmitter.js",
      "npm:react-dom@15.5.4/lib/isEventSupported.js",
      "npm:react-dom@15.5.4/lib/getVendorPrefixedEventName.js",
      "npm:react-dom@15.5.4/lib/ViewportMetrics.js",
      "npm:react-dom@15.5.4/lib/ReactEventEmitterMixin.js",
      "npm:react-dom@15.5.4/lib/EventPluginHub.js",
      "npm:react-dom@15.5.4/lib/forEachAccumulated.js",
      "npm:react-dom@15.5.4/lib/accumulateInto.js",
      "npm:react-dom@15.5.4/lib/EventPluginUtils.js",
      "npm:react-dom@15.5.4/lib/DOMLazyTree.js",
      "npm:react-dom@15.5.4/lib/setTextContent.js",
      "npm:react-dom@15.5.4/lib/escapeTextContentForBrowser.js",
      "npm:react-dom@15.5.4/lib/getHostComponentFromComposite.js",
      "npm:react-dom@15.5.4/lib/findDOMNode.js",
      "npm:react-dom@15.5.4/lib/ReactVersion.js",
      "npm:react-dom@15.5.4/lib/ReactDefaultInjection.js",
      "npm:react-dom@15.5.4/lib/SimpleEventPlugin.js",
      "npm:react-dom@15.5.4/lib/getEventCharCode.js",
      "npm:react-dom@15.5.4/lib/SyntheticWheelEvent.js",
      "npm:react-dom@15.5.4/lib/SyntheticMouseEvent.js",
      "npm:react-dom@15.5.4/lib/getEventModifierState.js",
      "npm:react-dom@15.5.4/lib/SyntheticUIEvent.js",
      "npm:react-dom@15.5.4/lib/getEventTarget.js",
      "npm:react-dom@15.5.4/lib/SyntheticEvent.js",
      "npm:react-dom@15.5.4/lib/SyntheticTransitionEvent.js",
      "npm:react-dom@15.5.4/lib/SyntheticTouchEvent.js",
      "npm:react-dom@15.5.4/lib/SyntheticDragEvent.js",
      "npm:react-dom@15.5.4/lib/SyntheticKeyboardEvent.js",
      "npm:react-dom@15.5.4/lib/getEventKey.js",
      "npm:react-dom@15.5.4/lib/SyntheticFocusEvent.js",
      "npm:react-dom@15.5.4/lib/SyntheticClipboardEvent.js",
      "npm:react-dom@15.5.4/lib/SyntheticAnimationEvent.js",
      "npm:react-dom@15.5.4/lib/EventPropagators.js",
      "npm:fbjs@0.8.12/lib/EventListener.js",
      "npm:react-dom@15.5.4/lib/SelectEventPlugin.js",
      "npm:react-dom@15.5.4/lib/isTextInputElement.js",
      "npm:fbjs@0.8.12/lib/getActiveElement.js",
      "npm:react-dom@15.5.4/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.12/lib/focusNode.js",
      "npm:fbjs@0.8.12/lib/containsNode.js",
      "npm:fbjs@0.8.12/lib/isTextNode.js",
      "npm:fbjs@0.8.12/lib/isNode.js",
      "npm:react-dom@15.5.4/lib/ReactDOMSelection.js",
      "npm:react-dom@15.5.4/lib/getTextContentAccessor.js",
      "npm:react-dom@15.5.4/lib/getNodeForCharacterOffset.js",
      "npm:react-dom@15.5.4/lib/SVGDOMPropertyConfig.js",
      "npm:react-dom@15.5.4/lib/ReactReconcileTransaction.js",
      "npm:react-dom@15.5.4/lib/ReactInjection.js",
      "npm:react-dom@15.5.4/lib/ReactEventListener.js",
      "npm:fbjs@0.8.12/lib/getUnboundedScrollPosition.js",
      "npm:react-dom@15.5.4/lib/ReactDefaultBatchingStrategy.js",
      "npm:react-dom@15.5.4/lib/ReactDOMTextComponent.js",
      "npm:react-dom@15.5.4/lib/DOMChildrenOperations.js",
      "npm:react-dom@15.5.4/lib/Danger.js",
      "npm:fbjs@0.8.12/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.12/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.12/lib/createArrayFromMixed.js",
      "npm:react-dom@15.5.4/lib/ReactDOMTreeTraversal.js",
      "npm:react-dom@15.5.4/lib/ReactDOMEmptyComponent.js",
      "npm:react-dom@15.5.4/lib/ReactDOMComponent.js",
      "npm:react-dom@15.5.4/lib/ReactServerRenderingTransaction.js",
      "npm:react-dom@15.5.4/lib/ReactServerUpdateQueue.js",
      "npm:react-dom@15.5.4/lib/ReactMultiChild.js",
      "npm:react-dom@15.5.4/lib/flattenChildren.js",
      "npm:react-dom@15.5.4/lib/traverseAllChildren.js",
      "npm:react-dom@15.5.4/lib/KeyEscapeUtils.js",
      "npm:react-dom@15.5.4/lib/getIteratorFn.js",
      "npm:react-dom@15.5.4/lib/ReactElementSymbol.js",
      "npm:react-dom@15.5.4/lib/ReactChildReconciler.js",
      "npm:react-dom@15.5.4/lib/ReactDOMTextarea.js",
      "npm:react-dom@15.5.4/lib/LinkedValueUtils.js",
      "npm:react-dom@15.5.4/lib/ReactDOMSelect.js",
      "npm:react-dom@15.5.4/lib/ReactDOMOption.js",
      "npm:react-dom@15.5.4/lib/ReactDOMInput.js",
      "npm:react-dom@15.5.4/lib/DOMPropertyOperations.js",
      "npm:react-dom@15.5.4/lib/quoteAttributeValueForBrowser.js",
      "npm:react-dom@15.5.4/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.12/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.12/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.12/lib/hyphenate.js",
      "npm:react-dom@15.5.4/lib/dangerousStyleValue.js",
      "npm:react-dom@15.5.4/lib/CSSProperty.js",
      "npm:fbjs@0.8.12/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.12/lib/camelize.js",
      "npm:react-dom@15.5.4/lib/AutoFocusUtils.js",
      "npm:react-dom@15.5.4/lib/ReactComponentBrowserEnvironment.js",
      "npm:react-dom@15.5.4/lib/ReactDOMIDOperations.js",
      "npm:react-dom@15.5.4/lib/HTMLDOMPropertyConfig.js",
      "npm:react-dom@15.5.4/lib/EnterLeaveEventPlugin.js",
      "npm:react-dom@15.5.4/lib/DefaultEventPluginOrder.js",
      "npm:react-dom@15.5.4/lib/ChangeEventPlugin.js",
      "npm:react-dom@15.5.4/lib/BeforeInputEventPlugin.js",
      "npm:react-dom@15.5.4/lib/SyntheticInputEvent.js",
      "npm:react-dom@15.5.4/lib/SyntheticCompositionEvent.js",
      "npm:react-dom@15.5.4/lib/FallbackCompositionState.js",
      "npm:react-dom@15.5.4/lib/ARIADOMPropertyConfig.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.core.js",
      "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.set-proto.js",
      "npm:core-js@1.2.7/library/modules/$.ctx.js",
      "npm:core-js@1.2.7/library/modules/$.a-function.js",
      "npm:core-js@1.2.7/library/modules/$.an-object.js",
      "npm:core-js@1.2.7/library/modules/$.is-object.js",
      "npm:core-js@1.2.7/library/modules/$.js",
      "npm:core-js@1.2.7/library/modules/$.export.js",
      "npm:core-js@1.2.7/library/modules/$.global.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@1.2.7/library/fn/object/create.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/$.object-sap.js",
      "npm:core-js@1.2.7/library/modules/$.fails.js",
      "npm:core-js@1.2.7/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.7/library/modules/$.defined.js",
      "npm:core-js@1.2.7/library/modules/$.iobject.js",
      "npm:core-js@1.2.7/library/modules/$.cof.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.7/library/fn/object/define-property.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "ikanedo/react-redux-simple-validate": "github:ikanedo/react-redux-simple-validate@1.0.0",
    "jsx": "github:floatdrop/plugin-jsx@1.2.1",
    "react": "npm:react@15.5.4",
    "react-dom": "npm:react-dom@15.5.4",
    "react-redux": "npm:react-redux@5.0.4",
    "react-redux-simple-validate": "npm:react-redux-simple-validate@1.0.10",
    "redux": "npm:redux@3.6.0",
    "redux-thunk": "npm:redux-thunk@2.2.0",
    "github:floatdrop/plugin-jsx@1.2.1": {
      "react-tools": "npm:react-tools@0.13.3"
    },
    "github:ikanedo/react-redux-simple-validate@1.0.0": {
      "jsx": "github:floatdrop/plugin-jsx@1.2.1",
      "lodash": "npm:lodash@4.17.4",
      "react": "npm:react@15.5.4",
      "react-redux": "npm:react-redux@5.0.4",
      "redux": "npm:redux@3.6.0",
      "validate.js": "npm:validate.js@0.10.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:acorn@4.0.11": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.5": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:brace-expansion@1.1.7": {
      "balanced-match": "npm:balanced-match@0.4.2",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.2.9",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.0",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.9.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.5.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "iconv-lite": "npm:iconv-lite@0.4.15",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.5.0",
      "recast": "npm:recast@0.11.23",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-react-class@15.5.2": {
      "fbjs": "npm:fbjs@0.8.12",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detective@4.5.0": {
      "acorn": "npm:acorn@4.0.11",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.0.3",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "iconv-lite": "npm:iconv-lite@0.4.15"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@3.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.8.12": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "setimmediate": "npm:setimmediate@1.0.5",
      "ua-parser-js": "npm:ua-parser-js@0.7.12"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.3",
      "once": "npm:once@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.15": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inflight@1.0.6": {
      "once": "npm:once@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.2": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.3",
      "whatwg-fetch": "npm:whatwg-fetch@2.0.3"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:loose-envify@1.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:minimatch@3.0.3": {
      "brace-expansion": "npm:brace-expansion@1.1.7",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fetch@1.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:once@1.4.0": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.1.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:prop-types@15.5.8": {
      "fbjs": "npm:fbjs@0.8.12",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@15.5.4": {
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.8",
      "react": "npm:react@15.5.4"
    },
    "npm:react-redux-simple-validate@1.0.10": {
      "jsx": "github:floatdrop/plugin-jsx@1.2.1",
      "lodash": "npm:lodash@4.17.4",
      "react": "npm:react@15.5.4",
      "react-redux": "npm:react-redux@5.0.4",
      "redux": "npm:redux@3.6.0",
      "validate.js": "npm:validate.js@0.10.0"
    },
    "npm:react-redux@5.0.4": {
      "create-react-class": "npm:create-react-class@15.5.2",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.2",
      "lodash": "npm:lodash@4.17.4",
      "lodash-es": "npm:lodash-es@4.17.4",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.8",
      "react": "npm:react@15.5.4"
    },
    "npm:react-tools@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "commoner": "npm:commoner@0.10.8",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@15.5.4": {
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.8"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.0.0",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:recast@0.11.23": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.9.6",
      "esprima": "npm:esprima@3.1.3",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:redux@3.6.0": {
      "lodash": "npm:lodash@4.17.4",
      "lodash-es": "npm:lodash-es@4.17.4",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:setimmediate@1.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-shims": "npm:buffer-shims@1.0.0"
    },
    "npm:ua-parser-js@0.7.12": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:validate.js@0.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
