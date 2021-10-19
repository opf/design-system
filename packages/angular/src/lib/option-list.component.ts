import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export interface IOpOptionListOption<T> {
  value:T;
  title:string;
  disabled?:boolean;
  description?:string;
}

export type IOpOptionListValue<T> = T|null;

/**
 * OptionList is a form field that offers multiple exclusive options. The component is rather large and mostly used
 * for type selection in multi step wizards, though it can also be used in a larger form as an alternative to plain radio buttons.
 */
@Component({
  selector: 'op-option-list',
  // Style is imported globally
  templateUrl: './option-list.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OpOptionListComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpOptionListComponent<T> implements ControlValueAccessor {
  @HostBinding('class.op-option-list') className = true;

  /**
   * This is an array of available options, each one of them will be rendered as a radio button item.
   * It is a list of options, of which each has the following fields:
   */
  @Input() options:IOpOptionListOption<T>[] = [];

  /**
   * This sets the input name. Usually you will not need this, but sometimes you might want to set the name explicitly
   */
  @Input() name = `op-option-list-${+(new Date())}`;

  /**
   * Emits when the selected value has changed
   */
  @Output() selectedChange = new EventEmitter<T>();

  /**
   * @ignore
   */
  private _selected:IOpOptionListValue<T> = null;

  /**
   * @ignore
   */
  get selected() {
    return this._selected;
  }

  /**
   * @ignore
   */
  set selected(value:IOpOptionListValue<T>) {
    this._selected = value;
    this.onChange(value);
  }

  /**
   * @ignore
   */
  getClassListForItem(option:IOpOptionListOption<T>) {
    return {
      'op-option-list--item': true,
      'op-option-list--item_selected': this.selected === option.value,
      'op-option-list--item_disabled': !!option.disabled,
    };
  }

  /**
   * @ignore
   */
  onChange = (_:IOpOptionListValue<T>) => {};

  /**
   * @ignore
   */
  onTouched = (_:IOpOptionListValue<T>) => {};

  /**
   * @ignore
   */
  writeValue(value:IOpOptionListValue<T>) {
    this._selected = value;
  }

  /**
   * @ignore
   */
  registerOnChange(fn:any) {
    this.onChange = fn;
  }

  /**
   * @ignore
   */
  registerOnTouched(fn:any) {
    this.onTouched = fn;
  }
}
