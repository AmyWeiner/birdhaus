class CreateTemperature1s < ActiveRecord::Migration
  def change
    create_table :temperature1s do |t|
      t.float :temp
      t.datetime :time

      t.timestamps
    end
  end
end
