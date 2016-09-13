/**
 * @module ui/field-text-input.reel
 */
var Field = require("../field.reel/field").Field;

/**
 * @class FieldTextInput
 * @extends Component
 */
exports.FieldTextInput = Field.specialize({
    hasTemplate: {
        value: true
    },

    disabled: {
        value: false
    },

    hasError: {
        value: false
    },

    prepareForActivationEvents: {
        value: function () {
            if (this.validator) {
                this.control.element.addEventListener('blur', this, true);
            }
        }
    },

    captureBlur: {
        value: function(event) {
            this.hasError = !this.validator.validate(this.value);
        }
    }
});
