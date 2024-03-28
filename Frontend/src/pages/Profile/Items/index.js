import React from 'react';
import Button from '../../../Components/Button';
import ItemForm from './itemsForm';


function Items() {
  const [openItemForm, setOpenItemForm] = React.useState(false);
  return (
    <div>
      <div className="flex justify-end">
        <Button title='Add Product'
          onClick={() => setOpenItemForm(true)}
        />
      </div>

      {openItemForm && <ItemForm open={openItemForm} setOpen={setOpenItemForm} />} {/* Fixed setOpen prop name */}
    </div>
  );
}

export default Items;
