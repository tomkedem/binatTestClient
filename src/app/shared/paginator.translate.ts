import { MatPaginatorIntl } from "@angular/material/paginator";


const portuguesRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 de ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} מתוך ${length}`;
}

export function getPortuguesPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = 'פריטים לכל עמוד:';
  paginatorIntl.nextPageLabel = 'עמוד הבא';
  paginatorIntl.previousPageLabel = 'עמוד קודם';
  paginatorIntl.firstPageLabel = 'עמוד ראשון';
  paginatorIntl.lastPageLabel = 'עמוד אחרון';
  paginatorIntl.getRangeLabel = portuguesRangeLabel;
  return paginatorIntl;
}