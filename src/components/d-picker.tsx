import {
  DatePicker,
  DatePickerContent,
  DatePickerContext,
  DatePickerInput,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerView,
  DatePickerViewControl,
  DatePickerViewTrigger
} from "@/components/ui/date-picker";
import { Portal } from "solid-js/web";
import { For, Index } from "solid-js";

const DPicker = (props: { name: string; required?: boolean }) => {
  console.log("DPicker rendered");
  return (
    <DatePicker>
  <DatePickerInput />
  <Portal>
    <DatePickerContent>
      <DatePickerView view="day">
        <DatePickerContext>
          {api => (
            <>
              <DatePickerViewControl>
                <DatePickerViewTrigger>
                  <DatePickerRangeText />
                </DatePickerViewTrigger>
              </DatePickerViewControl>
              <DatePickerTable>
                <DatePickerTableHead>
                  <DatePickerTableRow>
                    <For each={api().weekDays}>
                      {weekDay => <DatePickerTableHeader>{weekDay.short}</DatePickerTableHeader>}
                    </For>
                  </DatePickerTableRow>
                </DatePickerTableHead>
                <DatePickerTableBody>
                  <For each={api().weeks}>
                    {week => (
                      <DatePickerTableRow>
                        <For each={week}>
                          {day => (
                            <DatePickerTableCell value={day}>
                              <DatePickerTableCellTrigger>{day.day}</DatePickerTableCellTrigger>
                            </DatePickerTableCell>
                          )}
                        </For>
                      </DatePickerTableRow>
                    )}
                  </For>
                </DatePickerTableBody>
              </DatePickerTable>
            </>
          )}
        </DatePickerContext>
      </DatePickerView>
      <DatePickerView view="month">
        <DatePickerContext>
          {api => (
            <>
              <DatePickerViewControl>
                <DatePickerViewTrigger>
                  <DatePickerRangeText />
                </DatePickerViewTrigger>
              </DatePickerViewControl>
              <DatePickerTable>
                <DatePickerTableBody>
                  <For
                    each={api().getMonthsGrid({
                      columns: 4,
                      format: "short"
                    })}
                  >
                    {months => (
                      <DatePickerTableRow>
                        <For each={months}>
                          {month => (
                            <DatePickerTableCell value={month.value}>
                              <DatePickerTableCellTrigger>{month.label}</DatePickerTableCellTrigger>
                            </DatePickerTableCell>
                          )}
                        </For>
                      </DatePickerTableRow>
                    )}
                  </For>
                </DatePickerTableBody>
              </DatePickerTable>
            </>
          )}
        </DatePickerContext>
      </DatePickerView>
      <DatePickerView view="year">
        <DatePickerContext>
          {api => (
            <>
              <DatePickerViewControl>
                <DatePickerViewTrigger>
                  <DatePickerRangeText />
                </DatePickerViewTrigger>
              </DatePickerViewControl>
              <DatePickerTable>
                <DatePickerTableBody>
                  <For
                    each={api().getYearsGrid({
                      columns: 4
                    })}
                  >
                    {years => (
                      <DatePickerTableRow>
                        <For each={years}>
                          {year => (
                            <DatePickerTableCell value={year.value}>
                              <DatePickerTableCellTrigger>{year.label}</DatePickerTableCellTrigger>
                            </DatePickerTableCell>
                          )}
                        </For>
                      </DatePickerTableRow>
                    )}
                  </For>
                </DatePickerTableBody>
              </DatePickerTable>
            </>
          )}
        </DatePickerContext>
      </DatePickerView>
    </DatePickerContent>
  </Portal>
</DatePicker>

  );
};

export default DPicker;
