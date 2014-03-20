class CreateTemperature3s < ActiveRecord::Migration
  def change
    create_table :temperature3s do |t|
      t.float :temp
      t.datetime :time

      t.timestamps
    end
  end
end
