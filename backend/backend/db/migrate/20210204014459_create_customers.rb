class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :username
      t.string :email

      t.timestamps
    end
  end
end
