class CreateReadings < ActiveRecord::Migration
  def change
    create_table :readings do |t|
      t.string :sensor_id
      t.float :temp
      t.datetime :time

      t.timestamps
    end
  end
end
