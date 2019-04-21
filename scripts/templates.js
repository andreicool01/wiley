const editCard = ({ key, title, text, caption, status }) => `
<div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">${caption}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                <input placeholder="Task title" type="text" value="${title}" class="mdl-textfield__input" name="title" />
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                <textarea class="mdl-textfield__input" name="text" placeholder="Task description">${text}</textarea>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                <table>
                  <tr>
                    <td>Status:</td>
                    <td><strong>${status}</strong></td>
                  </tr>
                </table>
              </div>
              <div class="mdl-card__actions text-align-right">
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="cardsave">Save</button>
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="cardcancel">Cancel</button>
              </div>
              <input type="hidden" name="key" value="${key}" />
            </div>
`;


const getCard = ({key, title, text}) => `
  <div class="mdl-cell mdl-cell--2-col card-title">${title}</div>
  <div class="mdl-cell mdl-cell--7-col">${text}</div>
  <div class="mdl-cell mdl-cell--3-col text-align-right" >
    <button data-id="${key}" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored btn-completed">
      <i class="material-icons">done</i>
    </button>
    
    <button data-id="${key}" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored btn-edit">
      <i class="material-icons">edit</i>
    </button>
    <button data-id="${key}" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored btn-delete">
      <i class="material-icons">delete</i>
    </button>
    
</div>
`;
